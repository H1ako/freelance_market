from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import UserAchievement
from achievements.serializers import AchievementSerializer


class UserAchievementSerializer(HyperlinkedModelSerializer):
    achievement = AchievementSerializer()

    class Meta:
        model = UserAchievement
        fields = [
            "achievement",
        ]
