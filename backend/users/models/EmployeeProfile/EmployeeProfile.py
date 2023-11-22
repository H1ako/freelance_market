from django.db import models
from django.utils.translation import gettext_lazy as _

from users.models import User


class EmployeeProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="employee_profile",
        verbose_name=_("User"),
    )
