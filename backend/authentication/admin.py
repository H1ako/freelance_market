from django.contrib import admin

from .models import EmailConfirmation, PhoneNumberConfirmation


admin.site.register(EmailConfirmation)
admin.site.register(PhoneNumberConfirmation)
