from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class WorkOrder(TimeStampMixin):
    WAITING_FOR_EMPLOYEE = 0
    ACTIVE = 1
    CHECKING = 2
    APPROVED = 3
    ABORTED = 4  # if order is taking more than specified term of time
    CANCELED = 5  # by employer

    ORDER_STATUSES = (
        (WAITING_FOR_EMPLOYEE, "Waiting"),
        (ACTIVE, "Active"),
        (CHECKING, "Checking"),
        (APPROVED, "Approved"),
        (ABORTED, "Aborted"),
        (CANCELED, "Canceled"),
    )

    FULL_PAYMENT = 0
    STEP_PAYMENT = 1

    PAYMENT_STATUSES = (
        (FULL_PAYMENT, "Full Payment"),
        (STEP_PAYMENT, "Step Payment"),
    )

    employer = models.ForeignKey(
        "users.EmployerProfile",
        on_delete=models.SET_NULL,
        related_name="work_orders",
        verbose_name=_("Employer"),
        null=True,
    )
    payment_type = models.CharField(
        _("Payment Type"), max_length=50, choices=PAYMENT_STATUSES
    )
    title = models.CharField(_("Title"), max_length=70)
    description = models.TextField(_("Description"))
    price_from = models.PositiveIntegerField(_("Price From"))
    price_to = models.PositiveIntegerField(_("Price Up To"), null=True)
    term_from = models.PositiveIntegerField(_("term From"), null=True)  # days
    term_to = models.PositiveIntegerField(_("term To"), null=True)  # days
    expires_at = models.DateTimeField(_("Expires At"))
    status = models.CharField(_("Status"), max_length=60, choices=ORDER_STATUSES)
