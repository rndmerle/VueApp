"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.views.generic import TemplateView
# from .api.views import index_view, MessageViewSet
from .wqmt.views import index_view, WQMTViewSet

router = routers.DefaultRouter()
# router.register('messages', MessageViewSet)
router.register('wqmt', WQMTViewSet)

urlpatterns = [

    # http://localhost:8000/
    path('', index_view, name='index'),

    # http://localhost:8000/api/<router-viewsets>
    path('api/', include(router.urls)),

    # http://localhost:8000/api/admin/
    # path('api/admin/', admin.site.urls),

    path('admin/', admin.site.urls),

    path('api/wqmt', TemplateView.as_view(template_name='index.html')),

]
