from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class UserActivity(TimeStampMixin):
    user_profile = models.ForeignKey(
        "users.UserProfile",
        on_delete=models.CASCADE,
        related_name="activities",
        verbose_name=_("User Profile"),
    )
    type = models.CharField(_("Type"), max_length=100)
