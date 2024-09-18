# Generated by Django 3.2.7 on 2024-09-13 01:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('minha_dashboard', '0007_auto_20240911_1557'),
    ]

    operations = [
        migrations.AlterField(
            model_name='despesas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 12, 22, 57, 22, 464531)),
        ),
        migrations.AlterField(
            model_name='despesas',
            name='valor_total',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='vendas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 12, 22, 57, 22, 464531)),
        ),
    ]
