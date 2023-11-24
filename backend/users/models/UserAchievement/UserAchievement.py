from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class UserAchievement(TimeStampMixin):
    user_profile = models.ForeignKey(
        "users.UserProfile",
        on_delete=models.CASCADE,
        related_name="achievements",
        verbose_name=_("User Profile"),
    )
    achievement = models.ForeignKey(
        "achievements.Achievement",
        on_delete=models.CASCADE,
        related_name="user_profiles",
        verbose_name=_("Achievement"),
    )
