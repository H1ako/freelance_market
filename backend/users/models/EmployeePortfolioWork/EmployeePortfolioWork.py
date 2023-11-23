from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class EmployeePortfolioWork(TimeStampMixin):
    employee = models.ForeignKey(
        "users.EmployeeProfile",
        on_delete=models.CASCADE,
        related_name="portfolio_works",
        verbose_name=_("Employee"),
    )
    work_order = models.ForeignKey(
        "market.WorkOrder",
        on_delete=models.SET_NULL,
        related_name="employee_portfolio_work",
        verbose_name=_("Work Order"),
        null=True,
        blank=True,
    )
    title = models.CharField(_("Title"), max_length=70)
