from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin
from market.models import WorkOrder


class WorkOrderService(TimeStampMixin):
    work_order = models.ForeignKey(
        "market.ActiveWorkOrder",
        on_delete=models.CASCADE,
        related_name="services",
        verbose_name=_("Work Order"),
    )
    title = models.CharField(_("Title"), max_length=70)
    description = models.TextField(_("Description"), max_length=200)
    price = models.PositiveIntegerField(_("Price"))
    term = models.PositiveSmallIntegerField(_("Term"), default=1)
