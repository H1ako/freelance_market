from django.db import models
from django.utils.translation import gettext_lazy as _

from phonenumber_field.modelfields import PhoneNumberField

from users.models import User


class UserAuthProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="auth_profile",
        verbose_name=_("User"),
    )
    vkontakte_hash = models.CharField(
        _("Vkontakte Hash"), max_length=500, null=False, blank=False
    )
    google_hash = models.CharField(
        _("Google Hash"), max_length=500, null=False, blank=False
    )
    discord_hash = models.CharField(
        _("Discord Hash"), max_length=500, null=False, blank=False
    )
    phone_number = PhoneNumberField(null=False, blank=False, unique=True)
