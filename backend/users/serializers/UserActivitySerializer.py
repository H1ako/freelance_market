from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import UserActivity


class UserActivitySerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserActivity
        fields = [
            "type",
        ]
