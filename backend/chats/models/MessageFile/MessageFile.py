from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class MessageFile(TimeStampMixin):
    message = models.ForeignKey(
        "chats.DefaultMessage",
        on_delete=models.CASCADE,
        related_name="files",
        verbose_name=_("Message"),
    )
