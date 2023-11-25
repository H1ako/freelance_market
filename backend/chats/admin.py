from django.contrib import admin

from chats.models import MessageFile, Chat, ChatMessage, DefaultMessage


admin.site.register(MessageFile)
admin.site.register(Chat)
admin.site.register(ChatMessage)
admin.site.register(DefaultMessage)
