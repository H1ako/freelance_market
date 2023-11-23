from django.db import models
from django.utils.translation import gettext_lazy as _

from authentication.models import ConfirmationMixin


class EmailConfirmation(ConfirmationMixin):
    auth_profile = models.ForeignKey(
        "users.UserAuthProfile",
        verbose_name=_("Auth Profile"),
        related_name="email_confimations",
        on_delete=models.CASCADE,
    )
    email = models.EmailField(_("Email"))
