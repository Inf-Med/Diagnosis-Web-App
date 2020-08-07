from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from .models import Quest, Quest2, Symptoms, DiseasesToSymptoms, Diseases
from .serializers import QuestSerializer, QuestSerializer2, SymptomSerializer, DSSerializer, DiseasesSerializer
from django.http import JsonResponse
#import json, os, sys, re
#from django.core.exceptions import ObjectDoesNotExist
#from .bayes_matching import BayesMatching


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


# Test view to test model
class SymptomsTest(ListModelMixin, GenericAPIView):

    def get(self, request):
        symptoms = Symptoms.objects.all()
        serializer = SymptomSerializer(symptoms, many=True)
        return JsonResponse(serializer.data, safe=False)


# Test view to test model
class DtoSTest(ListModelMixin, GenericAPIView):

    def get(self, request):
        ds = DiseasesToSymptoms.objects.all()
        serializer = DSSerializer(ds, many=True)
        return JsonResponse(serializer.data, safe=False)


class DiseasesWithNames(ListModelMixin, GenericAPIView):

    def get(self, request):
        diseases_query = Diseases.objects.all()
        serializer = DiseasesSerializer(diseases_query, many=True)
        return JsonResponse(serializer.data, safe=False)


class PatientsToDisplay(ListModelMixin, GenericAPIView):
    def get(self, request):
        patients = Quest.objects.all()
        serializer = QuestSerializer(patients, many=True)
        return JsonResponse(serializer.data, safe=False)


#class TestForClassification(ListModelMixin, GenericAPIView):

#    def get(self, request):
#        result = BayesMatching.make_classification("Macular eruption, Spots on skin (disorder), Erythematous condition")
#        return JsonResponse(result.data, safe=False)



