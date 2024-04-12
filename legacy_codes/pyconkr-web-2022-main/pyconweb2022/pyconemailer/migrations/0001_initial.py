# Generated by Django 4.0.2 on 2022-04-25 15:34

from django.db import migrations, models
import django.db.models.deletion
import martor.models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="EmailTemplates",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("content", martor.models.MartorField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Mailing",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "category",
                    models.CharField(
                        choices=[("SPONSOR", "후원사"), ("ETC", "기타")], max_length=10
                    ),
                ),
                ("email", models.EmailField(max_length=100)),
                ("is_sent", models.BooleanField(default=False)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Queue",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("TEST", "전송 테스트"),
                            ("SPONSOR", "후원사"),
                            ("MAILING_SPONSOR", "후원사 메일링"),
                        ],
                        max_length=20,
                    ),
                ),
                ("is_sent", models.BooleanField(default=False)),
                ("send_at", models.DateTimeField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "email_template_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.RESTRICT,
                        to="pyconemailer.emailtemplates",
                    ),
                ),
            ],
        ),
    ]