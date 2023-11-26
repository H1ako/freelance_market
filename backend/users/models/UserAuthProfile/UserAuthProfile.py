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
    email = models.EmailField(_("Email"), unique=True, blank=True, null=True)
    phone_number = PhoneNumberField(
        _("Phone Number"), null=True, blank=True, unique=True
    )

    @property
    def is_vkontakte_associated(self):
        # TODO: This
        return ""

    @property
    def is_google_associated(self):
        # TODO: This
        return ""

    @property
    def is_discord_associated(self):
        # TODO: This
        return ""

    @property
    def is_phone_number_associated(self):
        return self.phone_number != None
