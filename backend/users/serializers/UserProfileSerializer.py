from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import UserProfile
from users.serializers import UserAchievementSerializer, UserActivitySerializer


class UserProfileSerializer(HyperlinkedModelSerializer):
    achievements = UserAchievementSerializer(many=True)
    activities = UserActivitySerializer(many=True)

    class Meta:
        model = UserProfile
        fields = [
            "about",
            "first_name",
            "last_name",
            "show_birth_date",
            "achievements",
        ]
