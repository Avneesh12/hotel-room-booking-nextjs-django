# Generated by Django 4.1.13 on 2023-11-20 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('booking', '0004_delete_bookings_delete_rooms'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bookings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cus_name', models.CharField(max_length=50)),
                ('room_no', models.IntegerField()),
                ('amount', models.IntegerField()),
                ('check_in_date', models.DateTimeField(auto_now=True)),
                ('check_out_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Rooms',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_no', models.IntegerField()),
                ('room_type', models.CharField(max_length=50)),
                ('amount', models.IntegerField()),
                ('is_available', models.BooleanField(default=True)),
            ],
        ),
    ]
