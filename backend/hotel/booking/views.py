from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .form import *
from .serializers import *
from rest_framework import status
# Create your views here.

def room_view(request):
    if request.method == "GET":
        frm_unbound = HotelRooms()
        d = {'frm':frm_unbound}
        return render(request,'booking/rooms.html',context=d)
    elif request.method == "POST":
        frm_bound = HotelRooms(request.POST)
        d = {"frm":frm_bound}
        if frm_bound.is_valid():
            frm_bound.save()
            return HttpResponse("Room Added")
        else:
            return render(request,'booking/rooms.html',context=d)


def booking_view(request):
    rooms = Rooms.objects.all()
    d = {'rooms':rooms}
    if request.method == "GET":
        return render(request,'booking/book.html',context=d)
    elif request.method == "POST":
        b = Bookings()
        b.cus_name = request.POST.get('name')
        b.room_no = request.POST.get('roomnumber')
        b.amount = int(request.POST.get('amount'))
        b.check_in_date = request.POST.get('checkin')
        b.check_out_date = request.POST.get('checkout')
        b.save()
        r = Rooms.objects.get(room_no = b.room_no)
        r.is_available = False
        r.save()

        return render(request,'booking/book.html',context=d)




# APIS 


# Get All Rooms Details

@api_view(['GET','POST','PUT','PATCH'])
def get_rooms(request):
    if request.method == "GET":
        try:
            room = Rooms.objects.all()
            room_serializer = RoomSerializer(room,many=True)
            return Response(data={'res':room_serializer.data})
        except:
            return Response(data={'res':"Somehing gone wrong Please try Later.."},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    elif request.method == "POST":
        try:
            room = RoomSerializer(data=request.data)
            if room.is_valid():
                room.save()
                return Response(data={'res':'Room Succesfully Added in Your DataBase'},status=status.HTTP_200_OK)
            else:
                return Response(data={'res':"Something gone Wrong Please Try Later"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except:
            return Response(data={'res':'Please check your Data'},status=status.http400)
    
    elif request.method == "PUT":
        id = int(request.data['id'])
        room = Rooms.objects.get(id=id)
        room_serializer = RoomSerializer(room,request.data)
        if room_serializer.is_valid():
            room_serializer.save()
            return Response(data={'res':"Your Room Data has Been Updated"},status=status.HTTP_200_OK)
        else:
            return Response(data={'res':"Somethhing gone Wrong"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    elif request.method == "PATCH":
        try:
            room_no = request.data['room_no']
            room = Rooms.objects.get(room_no=room_no)
            room.is_available = not room.is_available
            room.save()
            return Response(data={'res':"Room Updated Succesfully"},status=status.HTTP_200_OK)
        except:
            return Response(data={'res':'Something gone Wrong'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    
@api_view(['GET'])
def get_single_room_details(request,id):
    if request.method == "GET":
        try:
            room = Rooms.objects.get(id=id)
            room_serializer = RoomSerializer(room)
            return Response(data={'res':room_serializer.data})
        except:
            return Response(data={'res':'Something gone Wrong'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Get Room Amount

@api_view(['GET'])
def get_room_amount(request,room_no=None):
    if request.method == "GET":
        if room_no is not None:
            room = Rooms.objects.get(room_no=room_no)
            return Response(data={'res':room.amount})
        else:
            return Response(data={'res':'Choose Room Number'})
    


# Booking APi


@api_view(['GET','POST'])
def booking_api(request):
    if request.method == "GET":
        try:
            booking = Bookings.objects.all()
            booking_serizlizer = BookingSerializer(booking,many=True)
            return Response(data={'res':booking_serizlizer.data},status=status.HTTP_200_OK)
        except:
            return Response(data={'res':'Something gone Wrong'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    if request.method == "POST":
        try:
            booking_serializer = BookingSerializer(data=request.data)
            if booking_serializer.is_valid():
                booking_serializer.save()
                return Response(data={'res':'Room Booking Succeful'},status=status.HTTP_200_OK)
            else:
                return Response(data={'res':'Please Check Your Enteries'},status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response(data={'res':'Something gone wrong'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


@api_view(['GET'])
def get_single_booking(request,id):
    if request.method == "GET":
        booking = Bookings.objects.get(id=id)
        booking_serializer = BookingSerializer(booking)
        return Response(data=booking_serializer.data,status=status.HTTP_200_OK)
    
    