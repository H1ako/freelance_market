from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class ActiveWorkOrderPaymentStep(TimeStampMixin):
    work_order = models.ForeignKey(
        "market.ActiveWorkOrder",
        on_delete=models.CASCADE,
        related_name="payment_steps",
        verbose_name=_("Work Order"),
    )
    summary = models.TextField(_("Summary"))
    price = models.PositiveIntegerField(_("Price"))
