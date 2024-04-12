# Generated by Django 2.2 on 2019-08-11 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0082_auto_20190809_1949'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lightningtalk',
            options={'ordering': ['accepted_at']},
        ),
        migrations.RemoveField(
            model_name='lightningtalk',
            name='accepted',
        ),
        migrations.AddField(
            model_name='lightningtalk',
            name='accepted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]