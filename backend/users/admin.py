from django.contrib import admin

from .models import User, EmployeeProfile, EmployerProfile, UserAuthProfile, UserProfile

# Register your models here.

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(UserAuthProfile)
admin.site.register(EmployeeProfile)
admin.site.register(EmployerProfile)
