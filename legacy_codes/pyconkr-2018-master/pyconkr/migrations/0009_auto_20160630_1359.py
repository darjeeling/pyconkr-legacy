# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-06-30 04:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyconkr', '0008_merge'),
    ]

    operations = [
        migrations.AddField(
            model_name='programcategory',
            name='show_in_list',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='programcategory',
            name='show_in_mobile',
            field=models.BooleanField(default=True),
        ),
    ]