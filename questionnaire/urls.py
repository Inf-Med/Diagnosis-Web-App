from django.urls import path
from .views import QuestAPIView, QuestAPIView2

urlpatterns = [
    path('quest/', QuestAPIView.as_view(), name='questionnaire'),
    path('quest2/', QuestAPIView2.as_view(), name='questionnaire2')
]
