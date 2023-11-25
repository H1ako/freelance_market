from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from typing import Literal

from core.models import TimeStampMixin


class WorkOrder(TimeStampMixin):
    WAITING_FOR_EMPLOYEE = 0
    ACTIVE = 1
    CANCELED = 2

    ORDER_STATUSES = (
        (WAITING_FOR_EMPLOYEE, "Waiting"),
        (ACTIVE, "Active"),
        (CANCELED, "Canceled"),
    )

    employer = models.ForeignKey(
        "users.EmployerProfile",
        on_delete=models.SET_NULL,
        related_name="work_orders",
        verbose_name=_("Employer"),
        null=True,
    )
    title = models.CharField(_("Title"), max_length=70)
    description = models.TextField(_("Description"))
    price_from = models.PositiveIntegerField(_("Price From"))
    price_to = models.PositiveIntegerField(_("Price Up To"), null=True)
    term_from = models.PositiveIntegerField(_("term From"), null=True)  # days
    term_to = models.PositiveIntegerField(_("term To"), null=True)  # days
    expires_at = models.DateTimeField(_("Expires At"))
    status = models.CharField(
        _("Status"), max_length=60, choices=ORDER_STATUSES, default=WAITING_FOR_EMPLOYEE
    )

    @property
    def term_type(self) -> Literal["not_specified", "specific", "range"]:
        if self.term_from is None and self.term_to is None:
            return "not_specified"

        if not (self.term_from is None) and self.term_to is None:
            return "specific"

        return "range"

    @property
    def price_type(self) -> Literal["not_specified", "specific", "range"]:
        if self.price_from is None and self.price_to is None:
            return "not_specified"

        if not (self.price_from is None) and self.price_to is None:
            return "specific"

        return "range"

    @property
    def is_expired(self) -> bool:
        current_datetime = timezone.now()

        return current_datetime >= self.expires_at

    def _set_status(self, status):
        self.status = status
        self.save()

    def _cancel(self):
        self._set_status(self.CANCELED)

    def _make_active(self):
        self._set_status(self.ACTIVE)
