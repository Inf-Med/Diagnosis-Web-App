from rest_framework import serializers

from .models import *


class QuestSerializer(serializers.ModelSerializer):
    Sex_choices = [
        ("F", "Female"),
        ("M", "Male")
    ]
    first_name = serializers.CharField(max_length=100, default="First_name")
    last_name = serializers.CharField(max_length=100, default="Last_name")
    age = serializers.IntegerField(default="0")
    date_of_birth = serializers.CharField(default="2000-12-12")
    pesel = serializers.CharField(required=False, default="00000000000")
    sex = serializers.CharField(max_length=100, default="Female")

    class Meta:
        model = Quest
        fields = [
            'first_name',
            'last_name',
            'age',
            'date_of_birth',
            'pesel',
            'sex'
        ]

    def create(self, validated_data):
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        age = validated_data['age']
        date_of_birth = validated_data['date_of_birth']
        pesel = validated_data['pesel']
        sex = validated_data['sex']

        quest_obj = Quest(
            first_name=first_name,
            last_name=last_name,
            age=age,
            date_of_birth=date_of_birth,
            pesel=pesel,
            sex=sex,

        )
        quest_obj.save()
        return validated_data

    def update(self, instance, validated_data):
        instance.title = validated_data.get('quest_name', instance.quest_name)
        instance.description = validated_data.get('category', instance.category_qu)

        instance.save()
        return instance


class QuestSerializer2(serializers.ModelSerializer):
    Diseases_choices = (
        ("1", "Diabetes"),
        ("2", "Huntington's chorea"),
        ("3", "Cystic fibrosis")
    )

    Symptoms_choices = (
        ("Cough", "Cough"),
        ("Fever", "Fever"),
        ("Headache", "Headache")
    )
    family_diseases = serializers.CharField(required=False, default=None)
    symptoms = serializers.CharField(required=False, default=None)
    pregnancy = serializers.BooleanField()
    cigarettes = serializers.BooleanField()
    alcohol = serializers.BooleanField()
    drugs = serializers.CharField(required=False, default=None)
    injury = serializers.CharField(required=False, default=None)

    class Meta:
        model = Quest2
        fields = [
            'pregnancy',
            'cigarettes',
            'alcohol',
            'drugs',
            'injury',
            'symptoms',
            'family_diseases'
        ]

    def create(self, validated_data):
        pregnancy = validated_data['pregnancy']
        cigarettes = validated_data['cigarettes']
        alcohol = validated_data['alcohol']
        drugs = validated_data['drugs']
        injury = validated_data['injury']
        symptoms = validated_data['symptoms']
        family_diseases = validated_data['family_diseases']

        quest_obj2 = Quest2(
            pregnancy=pregnancy,
            cigarettes=cigarettes,
            alcohol=alcohol,
            drugs=drugs,
            injury=injury,
            symptoms=symptoms,
            family_diseases=family_diseases
        )
        quest_obj2.save()
        return validated_data

    def update(self, instance, validated_data):
        instance.title = validated_data.get('quest_name', instance.quest_name)
        instance.description = validated_data.get('category', instance.category_qu)

        instance.save()
        return instance


# ToDo refactor
class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptoms
        fields = ['symptom_cui', 'term']


# ToDo refactor
class DSSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiseasesToSymptoms
        fields = ['disease_cui', 'symptom_cui']
