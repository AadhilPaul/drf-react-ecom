# Generated by Django 4.0.5 on 2023-01-14 07:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='start_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]