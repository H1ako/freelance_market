from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class ChatMessage(TimeStampMixin):
    chat = models.ForeignKey(
        "chats.Chat",
        on_delete=models.CASCADE,
        related_name="messages",
        verbose_name=_("Chat"),
    )
    from_user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="messages",
        verbose_name=_("From User"),
    )
    
