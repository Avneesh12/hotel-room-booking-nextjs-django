# Generated by Django 4.1.13 on 2023-11-20 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0006_alter_bookings_check_in_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookings',
            name='check_in_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bookings',
            name='check_out_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
