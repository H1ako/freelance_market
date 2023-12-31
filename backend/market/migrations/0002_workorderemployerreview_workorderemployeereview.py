# Generated by Django 4.2.7 on 2023-11-23 22:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkOrderEmployerReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('comment', models.TextField(verbose_name='Comment')),
                ('rating', models.PositiveSmallIntegerField(choices=[(0, '1'), (1, '2'), (2, '3'), (3, '4'), (4, '5')], verbose_name='Rating')),
                ('work_order', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='employer_review', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WorkOrderEmployeeReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('comment', models.TextField(verbose_name='Comment')),
                ('rating', models.PositiveSmallIntegerField(choices=[(0, '1'), (1, '2'), (2, '3'), (3, '4'), (4, '5')], verbose_name='Rating')),
                ('work_order', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='employee_review', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
