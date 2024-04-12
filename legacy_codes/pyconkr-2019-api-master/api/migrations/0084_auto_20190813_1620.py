# Generated by Django 2.2 on 2019-08-13 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0083_auto_20190811_2151'),
    ]

    operations = [
        migrations.AddField(
            model_name='presentation',
            name='material',
            field=models.FileField(blank=True, default='', upload_to='presentation'),
        ),
        migrations.AddField(
            model_name='presentation',
            name='material_link',
            field=models.CharField(max_length=511, null=True),
        ),
    ]