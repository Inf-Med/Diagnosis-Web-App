from django.urls import path
from .views import UserCreateAPIView, UserLoginAPIView, logout

urlpatterns = [
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('register/', UserCreateAPIView.as_view(), name='register'),
    path('logout/<str:token>', logout, name='logout'),
]
