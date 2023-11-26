from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import User
from users.serializers import (
    UserProfileSerializer,
    UserAuthProfileSerializer,
    EmployeeProfileSerializer,
    EmployerProfileSerializer,
)


class UserSerializer(HyperlinkedModelSerializer):
    profile = UserProfileSerializer()
    auth_profile = UserAuthProfileSerializer()
    employee_profile = EmployeeProfileSerializer()
    employer_profile = EmployerProfileSerializer()

    class Meta:
        model = User
        fields = [
            "link",
            "username",
            "is_confirmed",
            "is_staff",
            "profile",
            "auth_profile",
            "employee_profile",
            "employer_profile",
        ]
