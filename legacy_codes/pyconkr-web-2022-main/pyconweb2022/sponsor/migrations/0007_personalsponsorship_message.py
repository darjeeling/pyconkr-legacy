# Generated by Django 4.0.2 on 2022-10-23 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sponsor", "0006_personalsponsorship"),
    ]

    operations = [
        migrations.AddField(
            model_name="personalsponsorship",
            name="message",
            field=models.CharField(blank=True, max_length=300),
        ),
    ]