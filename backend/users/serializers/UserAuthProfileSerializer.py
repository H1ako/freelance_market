from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import UserAuthProfile


class UserAuthProfileSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserAuthProfile
        fields = [
            "is_vkontakte_associated",
            "is_google_associated",
            "is_discord_associated",
            "is_phone_number_associated",
            "email",
        ]
