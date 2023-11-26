from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from core.models import TimeStampMixin


class ActiveWorkOrder(TimeStampMixin):
    ACTIVE = 0
    CHECKING = 0
    APPROVED = 0
    ABORTED = 4  # if order is taking more than specified term of time

    ORDER_STATUSES = (
        (ACTIVE, "Active"),
        (CHECKING, "Checking"),
        (APPROVED, "Approved"),
        (ABORTED, "Aborted"),
    )

    employee = models.ForeignKey(
        "users.EmployeeProfile",
        on_delete=models.SET_NULL,
        related_name="active_work_orders",
        verbose_name=_("Employee"),
        null=True,
    )
    work_order = models.OneToOneField(
        "market.WorkOrder",
        related_name="active_work_order",
        on_delete=models.SET_NULL,
        verbose_name=_("Work Order"),
        null=True,
    )
    price = models.PositiveIntegerField(_("Price"))
    term = models.PositiveIntegerField(_("Term"))  # days
    expires_at = models.DateTimeField(_("Expires At"))
    status = models.CharField(
        _("Status"), max_length=60, choices=ORDER_STATUSES, default=ACTIVE
    )

    @property
    def is_expired(self) -> bool:
        current_datetime = timezone.now()

        return current_datetime >= self.expires_at

    def _set_status(self, status):
        self.status = status
        self.save()

    def _abort(self):
        self._set_status(self.ABORTED)

    def _approve(self):
        self._set_status(self.APPROVED)

    def _check(self):
        self._set_status(self.CHECKING)
