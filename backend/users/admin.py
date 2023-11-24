from django.contrib import admin

from .models import (
    User,
    EmployeeProfile,
    EmployerProfile,
    UserAuthProfile,
    UserProfile,
    EmployeePortfolioWork,
    PortfolioWorkImage,
    UserAchievement,
    UserActivity,
)


# Register your models here.

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(UserAuthProfile)
admin.site.register(EmployeeProfile)
admin.site.register(EmployerProfile)
admin.site.register(EmployeePortfolioWork)
admin.site.register(PortfolioWorkImage)
admin.site.register(UserAchievement)
admin.site.register(UserActivity)
