from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class WorkOrderPaymentStep(TimeStampMixin):
    work_order = models.ForeignKey(
        "market.WorkOrder",
        on_delete=models.CASCADE,
        related_name="payment_steps",
        verbose_name=_("Work Order"),
    )
    summary = models.CharField(_("Title"), max_length=100)
    price = models.PositiveIntegerField(_("Price"))
