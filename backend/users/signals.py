from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save

from .models import User, UserProfile, UserAuthProfile, EmployerProfile, EmployeeProfile


@receiver(post_save, sender=User)
def user_created(sender, instance, created, **kwargs):
    if created:
        UserAuthProfile.objects.create(user=instance)

    if instance.if_confirmed:
        instance._created_profiles()


@receiver(pre_save, sender=User)
def user_is_confirmed_updated(sender, instance, **kwargs):
    try:
        old_instance = User.objects.get(pk=instance.pk)
    except User.DoesNotExist:
        old_instance = None

    if old_instance and not old_instance.is_confirmed and instance.is_confirmed:
        instance._created_profiles()
