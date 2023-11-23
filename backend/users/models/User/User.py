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

        if not self.profile:
            UserProfile.objects.create(user=self)
        if not self.employer_profile:
            EmployerProfile.objects.create(user=self)
        if not self.employee_profile:
            EmployeeProfile.objects.create(user=self)
