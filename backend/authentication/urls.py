from django.urls import path, include

urlpatterns = [
    path('<int:user_id>/', lambda x: None),
]
