from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser

from users.managers import CustomUserManager


class User(AbstractUser):
    is_confirmed = models.BooleanField(_("Is Confirmed"), default=False)
    email = None
    first_name = None
    last_name = None

    objects = CustomUserManager()

    def _create_profiles(self):
        from users.models import UserProfile, EmployerProfile, EmployeeProfile

        UserProfile.objects.create(user=self)
        EmployerProfile.objects.create(user=self)
        EmployeeProfile.objects.create(user=self)
