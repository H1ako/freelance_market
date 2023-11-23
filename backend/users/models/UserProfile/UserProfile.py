from django.db import models
from django.utils.translation import gettext_lazy as _

from users.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="profile", verbose_name=_("User")
    )
    first_name = models.CharField(_("First Name"), max_length=35, blank=True, null=True)
    last_name = models.CharField(_("Last Name"), max_length=55, blank=True, null=True)
    avatar = models.ImageField(
        _("Avatar"), upload_to="media/users/avatars/", blank=True, null=True
    )
    birth_date = models.DateTimeField(_("Birth Date"), blank=True, null=True)
