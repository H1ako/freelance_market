from rest_framework.serializers import HyperlinkedModelSerializer

from achievements.models import Achievement


class AchievementSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Achievement
        fields = [
            "title",
            "description",
            "icon_url",
        ]
