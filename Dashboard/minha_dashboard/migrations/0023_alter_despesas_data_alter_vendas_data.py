# Generated by Django 5.1.1 on 2024-10-06 15:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('minha_dashboard', '0022_alter_despesas_data_alter_vendas_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='despesas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime(2024, 10, 6, 12, 6, 23, 549221)),
        ),
        migrations.AlterField(
            model_name='vendas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime(2024, 10, 6, 12, 6, 23, 548176)),
        ),
    ]
