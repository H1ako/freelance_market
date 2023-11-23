from django.contrib import admin
from .models import EmployeeFavouriteWorkOrder, WorkOrder, WorkOrderRequest


admin.site.register(WorkOrder)
admin.site.register(WorkOrderRequest)
admin.site.register(EmployeeFavouriteWorkOrder)
