from django.db import models


class Quest(models.Model):
    first_name = models.TextField(max_length=25, default="First name")
    last_name = models.TextField(max_length=30, default="Last name")
    date_of_birth = models.DateField(default="2000-12-12")
    age = models.IntegerField(default='0')
    pesel = models.CharField(max_length=11, blank=True, null=True, default="00000000000")

    CHOICES = (('male', 'Male'), ('female', 'Female'))
    sex = models.TextField(default="Female")


class Quest2(models.Model):

    pregnancy = models.BooleanField(default=False)
    cigarettes = models.BooleanField(default=False)
    alcohol = models.BooleanField(default=False)
    #po zwiekszeniu maxymalnej liczby znakow jest problem z manage.py migrate.
    drugs = models.CharField(max_length=200, default="No drugs")
    injury = models.CharField(max_length=200, default="No injuries")
    symptoms = models.CharField(max_length=1000, default="No symptoms")
    family_diseases = models.CharField(max_length=200, default="No family diseases")
    ################################################################################


class Symptoms(models.Model):
    symptom_cui = models.CharField(max_length=20, null=False, primary_key=True)
    term = models.CharField(max_length=200, null=True)
    number_of_diseases = models.IntegerField(null=True)

    def __str__(self):
        return self.term


class Diseases(models.Model):
    disease_cui = models.CharField(max_length=20, null=False, primary_key=True)
    term = models.TextField(null=True)
    number_of_symptoms = models.IntegerField(null=True)


class DiseasesToSymptoms(models.Model):
    disease_cui = models.ForeignKey(Diseases, on_delete=models.CASCADE, db_column="disease_cui")
    symptom_cui = models.ForeignKey(Symptoms, on_delete=models.CASCADE, db_column="symptom_cui")
