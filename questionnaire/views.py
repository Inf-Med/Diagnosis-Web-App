from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from .serializers import QuestSerializer, QuestSerializer2


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