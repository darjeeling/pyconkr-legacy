# Generated by Django 2.1.5 on 2019-04-06 10:29

import api.models.sponsor
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import sorl.thumbnail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20190406_1533'),
    ]

    operations = [
        migrations.AddField(
            model_name='sponsor',
            name='submitted',
            field=models.BooleanField(default=False, help_text='파이콘 준비위원회의 검토 후 후원사의 후원을 받을지 여부를 결정합니다.'),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='accepted',
            field=models.BooleanField(default=False, help_text='파이콘 준비위원회의 검토 후 후원사의 후원을 받을지 여부를 결정합니다.'),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='business_registration_file',
            field=models.FileField(blank=True, default='', help_text='후원사 사업자 등록증 스캔본입니다.', upload_to=api.models.sponsor.registration_file_upload_to),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='business_registration_number',
            field=models.CharField(blank=True, default='', help_text='후원사 사업자 등록번호입니다.', max_length=100),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='contract_process_required',
            field=models.BooleanField(default=False, help_text='후원을 위한 계약 절차가 필요한지 여부입니다'),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='creator',
            field=models.ForeignKey(help_text='후원사를 등록한 유저', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='desc',
            field=models.TextField(blank=True, help_text='후원사 설명입니다. 이 설명은 홈페이지에 게시됩니다.', null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='desc_en',
            field=models.TextField(blank=True, help_text='후원사 설명입니다. 이 설명은 홈페이지에 게시됩니다.', null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='desc_ko',
            field=models.TextField(blank=True, help_text='후원사 설명입니다. 이 설명은 홈페이지에 게시됩니다.', null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='level',
            field=models.ForeignKey(blank=True, help_text='후원사 등급입니다.', null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.SponsorLevel'),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='logo_image',
            field=sorl.thumbnail.fields.ImageField(blank=True, help_text='홈페이지에 공개되는 후원사 이미지입니다.', null=True, upload_to=api.models.sponsor.logo_image_upload_to),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='logo_vector',
            field=sorl.thumbnail.fields.ImageField(blank=True, help_text='홈페이지에 공개되는 후원사 로고 백터 파일입니다.', null=True, upload_to=api.models.sponsor.logo_vector_upload_to),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='manager_email',
            field=models.EmailField(blank=True, default='', help_text='후원사 담당자의 이메일 주소입니다.', max_length=254),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='manager_name',
            field=models.CharField(blank=True, default='', help_text='후원사 담당자의 이름입니다.', max_length=100),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='manager_phone',
            field=models.CharField(blank=True, default='', help_text='후원사 담당자의 연락처입니다.', max_length=100),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='manager_secondary_phone',
            field=models.CharField(blank=True, default='', help_text='후원사 담당자 외의 연락이 가능한 연락처입니다.', max_length=100),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='name',
            field=models.CharField(blank=True, help_text='후원사 이름입니다. 서비스나 회사 이름이 될 수 있습니다.', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='name_en',
            field=models.CharField(blank=True, help_text='후원사 이름입니다. 서비스나 회사 이름이 될 수 있습니다.', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='name_ko',
            field=models.CharField(blank=True, help_text='후원사 이름입니다. 서비스나 회사 이름이 될 수 있습니다.', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='paid_at',
            field=models.DateTimeField(blank=True, help_text='후원금이 입금된 일시입니다. 아직 입금되지 않았을 경우 None이 들어갑니다.', null=True),
        ),
        migrations.AlterField(
            model_name='sponsor',
            name='url',
            field=models.CharField(blank=True, help_text='후원사 홈페이지 주소입니다. 파이콘 홈페이지에 공개됩니다.', max_length=255, null=True),
        ),
    ]
