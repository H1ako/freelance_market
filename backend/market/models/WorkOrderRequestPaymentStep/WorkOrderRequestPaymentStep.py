from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class WorkOrderRequestPaymentStep(TimeStampMixin):
    work_order_request = models.ForeignKey(
        "market.WorkOrderRequest",
        on_delete=models.CASCADE,
        related_name="payment_steps",
        verbose_name=_("Work Order Request"),
    )
    summary = models.CharField(_("Title"), max_length=100)
    price = models.PositiveIntegerField(_("Price"))
