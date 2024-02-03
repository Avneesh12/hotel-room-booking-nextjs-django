from django.urls import path
from .views import *

urlpatterns = [
    path('rooms/',room_view),
    path('bookings/',booking_view),
    
    # Api Urls
    path('roomsapi/',get_rooms),
    path('roomsapi/<int:id>/',get_single_room_details),

    # Get room No:
    path('roomamount/<int:room_no>/',get_room_amount),

    path('booking/',booking_api),

    # Get Single Booking
    path('getbooking/<int:id>/',get_single_booking),

]
