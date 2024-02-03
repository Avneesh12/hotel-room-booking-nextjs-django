from django import forms
from .models import *

class HotelRooms(forms.ModelForm):
    class Meta:
        model = Rooms
        fields = '__all__'
        