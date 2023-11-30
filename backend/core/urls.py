from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
# from django.views.decorators.csrf import csrf_exempt

# from graphene_django.views import GraphQLView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/v1/users/", include("users.urls")),
    path("api/v1/achievements/", include("achievements.urls")),
    path("api/v1/authentication/", include("authentication.urls")),
    path("api/v1/chats/", include("chats.urls")),
    path("api/v1/market/", include("market.urls")),
    path("api/v1/payments/", include("payments.urls")),
    # path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
