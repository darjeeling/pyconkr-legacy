# Generated by Django 2.2 on 2019-07-07 07:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0067_auto_20190707_1558'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sprint',
            name='num_of_participants',
        ),
    ]
