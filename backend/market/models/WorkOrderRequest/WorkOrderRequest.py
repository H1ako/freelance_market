from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class WorkOrderRequest(TimeStampMixin):
    ACTIVE = 0
    APPROVED = 1
    DECLINED = 2

    WORK_ORDER_STATUSES = (
        (ACTIVE, "Active"),
        (APPROVED, "Approved"),
        (DECLINED, "Declined"),
    )

    FULL_PAYMENT = 0
    STEP_PAYMENT = 1

    PAYMENT_TYPES = (
        (FULL_PAYMENT, "Full Payment"),
        (STEP_PAYMENT, "Step Payment"),
    )

    employee = models.ForeignKey(
        "users.EmployeeProfile",
        on_delete=models.SET_NULL,
        related_name="work_orders_requests",
        verbose_name=_("Employee"),
        null=True,
    )
    work_order = models.ForeignKey(
        "market.WorkOrder",
        on_delete=models.SET_NULL,
        related_name="work_requests",
        verbose_name=_("Work Order"),
        null=True,
    )
    payment_type = models.CharField(
        _("Payment Type"), max_length=50, choices=PAYMENT_TYPES, default=FULL_PAYMENT
    )
    text = models.TextField(_("Text"))
    price_from = models.PositiveIntegerField(_("Price From"))
    price_to = models.PositiveIntegerField(_("Price Up To"), null=True)
    term_from = models.PositiveIntegerField(_("term From"))  # days
    term_to = models.PositiveIntegerField(_("term To"), null=True)  # days
    status = models.CharField(_("Status"), max_length=60, choices=WORK_ORDER_STATUSES)
    is_favourite = models.BooleanField(_("Is Favourite"), default=False)
