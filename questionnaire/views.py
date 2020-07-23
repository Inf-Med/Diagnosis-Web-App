from .models import Quest, Quest2
from rest_framework.views import APIView
from .serializers import QuestSerializer, QuestSerializer2


class QuestAPIView(APIView):
    serializer_class = QuestSerializer
    queryset = Quest.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class QuestAPIView2(APIView):
    serializer_class = QuestSerializer2
    queryset = Quest2.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)