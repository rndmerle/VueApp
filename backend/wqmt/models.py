from django.db import models
from rest_framework import serializers

class WQMT(models.Model):
    class Meta:
        db_table = 'APP_WQMT'

    delivery = models.PositiveIntegerField(db_column = 'Delivery')
    issue_category = models.CharField(max_length=200, db_column = 'Issue Category')
    issue = models.CharField(max_length=200, db_column = 'Issue')
    detail = models.TextField(db_column = 'Detail')
    created_at = models.DateTimeField(auto_now_add=True, db_column = 'Create Datetime')
    updated_at = models.DateTimeField(auto_now=True, db_column = 'Update Datetime')

class WQMTSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WQMT
        fields = ('url', 'pk', 'delivery', 'issue_category', 'issue', 'detail', 'created_at', 'updated_at')
