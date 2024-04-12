# Generated by Django 2.2.10 on 2020-02-28 05:28

from django.db import migrations
import sorl.thumbnail.fields
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=sorl.thumbnail.fields.ImageField(blank=True, null=True, upload_to=user.models.profile_image),
        ),
    ]
