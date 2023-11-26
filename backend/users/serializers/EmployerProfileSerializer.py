from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import EmployerProfile


class EmployerProfileSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = EmployerProfile
        fields = [

        ]
