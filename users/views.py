from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .serializers import UserCreateSerializer, UserLoginSerializer, QuestSerializer, QuestSerializer2


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()


class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        # request.POST
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

##################################################################################


class QuestAPIView(APIView):
    serializer_class = QuestSerializer
    queryset = User.objects.all()

    def post(self, request):
        quests = request.data
        serializer = QuestSerializer(data=quests)
        if serializer.is_valid(raise_exception=True):
            quests_saved = serializer.data
            return Response(quests_saved, status=HTTP_200_OK)
        return Response()


class QuestAPIView2(APIView):
    serializer_class = QuestSerializer2
    queryset = User.objects.all()

    def post(self, request):
        quests = request.data
        serializer = QuestSerializer2(data=quests)
        if serializer.is_valid(raise_exception=True):
            quests_saved = serializer.data
            return Response(quests_saved, status=HTTP_200_OK)
        return Response()