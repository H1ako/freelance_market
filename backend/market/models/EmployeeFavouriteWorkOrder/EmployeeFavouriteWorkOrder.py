from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class EmployeeFavouriteWorkOrder(TimeStampMixin):
    employee = models.ForeignKey(
        "users.EmployeeProfile",
        on_delete=models.CASCADE,
        related_name="favourite_work_orders",
        verbose_name=_("Employee"),
    )
    work_order = models.ForeignKey(
        "market.WorkOrder",
        on_delete=models.CASCADE,
        related_name="favourites_employees",
        verbose_name=_("Work Order"),
    )
