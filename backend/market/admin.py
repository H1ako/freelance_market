from django.contrib import admin
from .models import (
    WorkOrder,
    WorkOrderRequest,
    WorkOrderService,
    WorkOrderEmployeeReview,
    WorkOrderEmployerReview,
    WorkOrderRequestPaymentStep,
    ActiveWorkOrderPaymentStep,
    ActiveWorkOrder,
)


admin.site.register(WorkOrder)
admin.site.register(WorkOrderRequest)
admin.site.register(WorkOrderService)
admin.site.register(WorkOrderEmployeeReview)
admin.site.register(WorkOrderEmployerReview)
admin.site.register(WorkOrderRequestPaymentStep)
admin.site.register(ActiveWorkOrderPaymentStep)
admin.site.register(ActiveWorkOrder)
