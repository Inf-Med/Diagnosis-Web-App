from django.db import models


class Quest(models.Model):
    first_name = models.CharField(max_length=25, default="First name")
    last_name = models.CharField(max_length=30, default="Last name")
    date_of_birth = models.DateField(default="2000-12-12")
    age = models.IntegerField(default='0')
    pesel = models.CharField(max_length=11, default='0')

    CHOICES = (('male', 'Male'), ('female', 'Female'))
    sex = models.CharField(max_length=11, choices=CHOICES, default='male')


class Quest2(models.Model):
    diseases_choices = (
        ("1", "Diabetes"),
        ("2", "Huntington's chorea"),
        ("3", "Cystic fibrosis")
    )
    symptoms_choices = (
        ("Cough", "Cough"),
        ("Fever", "Fever"),
        ("Headache", "Headache")
    )

    pregnancy = models.BooleanField(default=False)
    cigarettes = models.BooleanField(default=False)
    alcohol = models.BooleanField(default=False)
    drugs = models.CharField(max_length=100, blank=True, null=True)
    injury = models.CharField(max_length=200, blank=True, null=True)
    symptoms = models.CharField(max_length=100, choices=symptoms_choices)
    family_diseases = models.CharField(max_length=100, choices=diseases_choices)


class Symptoms(models.Model):
    symptoms_cui = models.CharField(max_length=20, null=False)
    term = models.CharField(max_length=200, null=True)
    number_of_diseases = models.IntegerField(null=True)


class Diseases(models.Model):
    disease_cui = models.CharField(max_length=20, null=False)
    term = models.CharField(max_length=200, null=True)
    number_of_symptoms = models.IntegerField(null=True)


class DiseasesToSymptoms(models.Model):
    disease_cui = models.ForeignKey(Diseases, on_delete=models.CASCADE)
    symptoms_cui = models.ForeignKey(Symptoms, on_delete=models.CASCADE)
