# Generated by Django 4.0.2 on 2022-09-12 18:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("sponsor", "0003_sponsorproxymodel"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="sponsor",
            name="creator",
        ),
        migrations.RemoveField(
            model_name="sponsor",
            name="manager_id",
        ),
    ]