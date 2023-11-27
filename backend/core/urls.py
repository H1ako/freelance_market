from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/users/', include('users.urls')),
    path('api/v1/achievements/', include('achievements.urls')),
    path('api/v1/authentication/', include('authentication.urls')),
    path('api/v1/chats/', include('chats.urls')),
    path('api/v1/market/', include('market.urls')),
    path('api/v1/payments/', include('payments.urls')),
]
