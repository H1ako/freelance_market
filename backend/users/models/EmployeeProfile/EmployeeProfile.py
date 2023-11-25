from django.db import models
from django.utils.translation import gettext_lazy as _

from users.models import User, EmployeeFavouriteWorkOrder


class EmployeeProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="employee_profile",
        verbose_name=_("User"),
    )

    def add_work_order_to_favourites(self, work_order):
        if not self.favourite_work_orders.filter(work_order=work_order).exists():
            EmployeeFavouriteWorkOrder.objects.create(
                employee=self, work_order=work_order
            )

    def remove_work_order_from_favourites(self, work_order):
        try:
            favourite_work_order = self.favourite_work_orders.get(work_order=work_order)

            favourite_work_order.delete()
        except EmployeeFavouriteWorkOrder.DoesNotExist:
            pass
