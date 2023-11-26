from rest_framework.serializers import HyperlinkedModelSerializer

from market.models import WorkOrder
from users.serializers import EmployeeProfileSerializer, EmployerProfileSerializer


class WorkOrderSerializer(HyperlinkedModelSerializer):
    employee = EmployeeProfileSerializer()
    employer = EmployerProfileSerializer()

    class Meta:
        model = WorkOrder
        fields = [
            "title",
            "description",
            "price_from",
            "price_to",
            "term_from",
            "employee",
            "employer",
            "term_to",
            "expires_at",
            "status",
            "term_type",
            "price_type",
            "is_expired",
        ]
