from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets, filters

from .models import WQMT, WQMTSerializer

# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))

class WQMTViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited.
    """
    queryset = WQMT.objects.all()
    serializer_class = WQMTSerializer

    filter_backends = (filters.SearchFilter,)
    search_fields = ('delivery', 'issue_category', 'issue', 'detail', 'created_at', 'updated_at')
