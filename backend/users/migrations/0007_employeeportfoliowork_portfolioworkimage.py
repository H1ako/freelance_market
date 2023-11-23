# Generated by Django 4.2.7 on 2023-11-23 22:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0002_workorderemployerreview_workorderemployeereview'),
        ('users', '0006_alter_userauthprofile_phone_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmployeePortfolioWork',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=70, verbose_name='Title')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='portfolio_works', to='users.employeeprofile', verbose_name='Employee')),
                ('work_order', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='employee_portfolio_work', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PortfolioWorkImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('src', models.ImageField(upload_to='static/users/portfolio_works/', verbose_name='Source')),
                ('portfolio_work', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='users.employeeportfoliowork', verbose_name='Portfolio Work')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
