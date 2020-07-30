from django.urls import path
from .views import QuestAPIView, QuestAPIView2, SymptomsTest, DtoSTest

urlpatterns = [
    path('quest/', QuestAPIView.as_view(), name='questionnaire'),
    path('quest2/', QuestAPIView2.as_view(), name='questionnaire2'),
    # Test urls
    path('symptoms/', SymptomsTest.as_view(), name='test'),
    path('ds/', DtoSTest.as_view(), name='test2')
]
