from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class MessageContentTypeMixin(TimeStampMixin):
    message = models.OneToOneField(
        "chats.ChatMessage",
        on_delete=models.CASCADE,
        related_name="content",
        verbose_name=_("Message"),
    )

    class Meta:
        abstract = True
