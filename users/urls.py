from django.urls import path
from .views import UserCreateAPIView, UserLoginAPIView, QuestAPIView, QuestAPIView2

urlpatterns = [
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('register/', UserCreateAPIView.as_view(), name='register'),
    path('quest/', QuestAPIView.as_view(), name='questionnaire'),
    path('quest2/', QuestAPIView2.as_view(), name='questionnaire2')
]
