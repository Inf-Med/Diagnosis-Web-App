from django.urls import path
from .views import QuestAPIView, QuestAPIView2, SymptomsTest, DtoSTest, DiseasesWithNames

urlpatterns = [
    path('quest/', QuestAPIView.as_view(), name='questionnaire'),
    path('quest2/', QuestAPIView2.as_view(), name='questionnaire2'),
    # Test urls
    path('symptoms/', SymptomsTest.as_view(), name='test'),
    path('diseases-to-symptoms/', DtoSTest.as_view(), name='test2'),

    path('diseases/', DiseasesWithNames.as_view(), name='diseases')
]
