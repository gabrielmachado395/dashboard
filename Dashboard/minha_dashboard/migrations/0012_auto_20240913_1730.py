# Generated by Django 3.2.7 on 2024-09-13 20:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('minha_dashboard', '0011_auto_20240913_1721'),
    ]

    operations = [
        migrations.AlterField(
            model_name='despesas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 13, 17, 30, 42, 853598)),
        ),
        migrations.AlterField(
            model_name='vendas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 13, 17, 30, 42, 853598)),
        ),
    ]
