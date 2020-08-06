from django.urls import path
from .views import *

urlpatterns = [
    path('quest/', QuestAPIView.as_view(), name='questionnaire'),
    path('quest2/', QuestAPIView2.as_view(), name='questionnaire2'),
    # Test urls
    path('symptoms/', SymptomsTest.as_view(), name='test'),
    path('diseases-to-symptoms/', DtoSTest.as_view(), name='test2'),
    path('diseases/', DiseasesWithNames.as_view(), name='diseases'),
    path('patients/', PatientsToDisplay.as_view(), name='patients')
    # path('test/', TestForClassification.as_view(), name='test')

]