# Generated by Django 2.2 on 2019-04-27 10:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0038_auto_20190427_1926'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='program',
            name='price',
        ),
    ]