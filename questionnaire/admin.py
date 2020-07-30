from django.contrib import admin
from .models import Quest, Quest2, Symptoms, Diseases, DiseasesToSymptoms
admin.site.register(Quest)
admin.site.register(Quest2)
admin.site.register(Symptoms)
admin.site.register(Diseases)
admin.site.register(DiseasesToSymptoms)

# Register your models here.
