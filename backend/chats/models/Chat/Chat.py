from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class Chat(TimeStampMixin):
    participants = models.ManyToManyField(
        "users.User",
        related_name="chats",
        verbose_name=_("User"),
    )

