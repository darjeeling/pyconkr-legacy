# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-23 14:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='option',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.Option'),
        ),
    ]