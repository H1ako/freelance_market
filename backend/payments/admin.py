from django.contrib import admin

from payments.models import Payment, Payout


admin.site.register(Payment)
admin.site.register(Payout)
