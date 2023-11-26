from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import EmployeePortfolioWork
from market.serializers import (
    WorkOrderSerializer,
)


class EmployeePortfolioWorkSerializer(HyperlinkedModelSerializer):
    work_order = WorkOrderSerializer()

    class Meta:
        model = EmployeePortfolioWork
        fields = [
            "title",
            "work_order",
        ]
