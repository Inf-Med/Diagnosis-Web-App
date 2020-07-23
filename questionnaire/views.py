from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from .models import Quest, Quest2
from .serializers import QuestSerializer, QuestSerializer2
# Create your views here.


class QuestAPIView(ListModelMixin, GenericAPIView, CreateModelMixin):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer

    def get(self, request, *args, **kwargs):
        return self.list(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class QuestAPIView2(ListModelMixin, GenericAPIView, CreateModelMixin):
    queryset = Quest2.objects.all()
    serializer_class = QuestSerializer2

    def get(self, request, *args, **kwargs):
        return self.list(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)