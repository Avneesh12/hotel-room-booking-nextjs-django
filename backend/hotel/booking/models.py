from django.db import models

# Create your models here.

class Rooms(models.Model):
    room_no = models.IntegerField()
    room_type = models.CharField(max_length=50)
    amount = models.IntegerField()
    is_available = models.BooleanField(default=True)

class Bookings(models.Model):
    cus_name = models.CharField(max_length=50)
    room_no = models.IntegerField()
    amount = models.IntegerField()
    check_in_date = models.DateField(null=True,blank=True)
    check_out_date = models.DateField(null=True,blank=True)
    def __str__(self):
        return self.cus_name

