# Generated by Django 3.1.2 on 2020-10-28 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalis', '0006_healthcareworker_email_field'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='age',
            field=models.IntegerField(default=-1),
        ),
    ]
