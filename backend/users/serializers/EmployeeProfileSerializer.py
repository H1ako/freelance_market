from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import EmployeeProfile
from users.serializers import EmployeePortfolioWorkSerializer


class EmployeeProfileSerializer(HyperlinkedModelSerializer):
    portfolio_works = EmployeePortfolioWorkSerializer()

    class Meta:
        model = EmployeeProfile
        fields = [
            "portfolio_works",
        ]
