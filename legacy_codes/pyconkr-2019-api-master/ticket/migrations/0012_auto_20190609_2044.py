# Generated by Django 2.2 on 2019-06-09 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0011_auto_20190522_2112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='amount',
            field=models.IntegerField(default=0, help_text='아이엠포트를 통해 결제한 가격입니다.'),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='cancel_receipt_url',
            field=models.CharField(blank=True, default='', help_text='결제 취소 영수증 URL입니다. 이 값은 카드 결제 취소 내역을 보여줄 때에 사용됩니다.', max_length=255),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='receipt_url',
            field=models.CharField(blank=True, help_text='결제 영수증 URL입니다. 이 값은 카드 결제 내역을 보여줄 때에 사용됩니다.', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='status',
            field=models.CharField(choices=[('ready', 'ready'), ('paid', 'paid'), ('cancelled', 'cancelled')], default='ready', max_length=10),
        ),
        migrations.AlterField(
            model_name='ticketproduct',
            name='cancelable_date',
            field=models.DateTimeField(blank=True, help_text='결제 취소가 가능한 기한입니다. 이 일시 이후에는 취소가 불가합니다.', null=True),
        ),
    ]
