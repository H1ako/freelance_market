from django.dispatch import receiver
from django.db.models.signals import post_save

from .models import User, UserProfile, UserAuthProfile, EmployerProfile, EmployeeProfile


@receiver(post_save, sender=User)
def user_created(sender, instance, created, **kwargs):
    if created:
        user_profile = UserProfile.objects.create(user=instance)
        user_auth_profile = UserAuthProfile.objects.create(user=instance)
        employee_profile = EmployeeProfile.objects.create(user=instance)
        employer_profile = EmployerProfile.objects.create(user=instance)
