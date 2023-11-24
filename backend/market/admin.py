from django.contrib import admin
from .models import (
    EmployeeFavouriteWorkOrder,
    WorkOrder,
    WorkOrderRequest,
    WorkOrderService,
    WorkOrderPaymentStep,
    WorkOrderEmployeeReview,
    WorkOrderEmployerReview,
)


admin.site.register(WorkOrder)
admin.site.register(WorkOrderRequest)
admin.site.register(EmployeeFavouriteWorkOrder)
admin.site.register(WorkOrderService)
admin.site.register(WorkOrderPaymentStep)
admin.site.register(WorkOrderEmployeeReview)
admin.site.register(WorkOrderEmployerReview)
