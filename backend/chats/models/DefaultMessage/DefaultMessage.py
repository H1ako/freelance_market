from django.db import models
from django.utils.translation import gettext_lazy as _

from chats.models import MessageContentTypeMixin


class DefaultMessage(MessageContentTypeMixin):
    text = models.TextField(_("Text"))
    
