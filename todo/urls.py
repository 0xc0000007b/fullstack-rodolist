from django.urls import path, include
from rest_framework import routers
from .api import TodoViewSet

router = routers.DefaultRouter()
router.register('api/todo', TodoViewSet)

urlpatterns = router.urls