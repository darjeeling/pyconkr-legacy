# Generated by Django 2.2.13 on 2020-09-02 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0018_auto_20200903_0019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lightningtalk',
            name='video_url',
            field=models.CharField(blank=True, max_length=511),
        ),
    ]
