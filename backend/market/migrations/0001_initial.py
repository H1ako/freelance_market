# Generated by Django 4.2.7 on 2023-11-23 20:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0006_alter_userauthprofile_phone_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('payment_type', models.CharField(choices=[(0, 'Full Payment'), (1, 'Step Payment')], max_length=50, verbose_name='Payment Type')),
                ('title', models.CharField(max_length=70, verbose_name='Title')),
                ('description', models.TextField(verbose_name='Description')),
                ('price_from', models.PositiveIntegerField(verbose_name='Price From')),
                ('price_to', models.PositiveIntegerField(null=True, verbose_name='Price Up To')),
                ('term_from', models.PositiveIntegerField(null=True, verbose_name='term From')),
                ('term_to', models.PositiveIntegerField(null=True, verbose_name='term To')),
                ('expires_at', models.DateTimeField(verbose_name='Expires At')),
                ('status', models.CharField(choices=[(0, 'Waiting'), (1, 'Active'), (2, 'Checking'), (3, 'Approved'), (4, 'Aborted'), (5, 'Canceled')], max_length=60, verbose_name='Status')),
                ('employer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='work_orders', to='users.employerprofile', verbose_name='Employer')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WorkOrderService',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=70, verbose_name='Title')),
                ('description', models.TextField(max_length=200, verbose_name='Description')),
                ('price', models.PositiveIntegerField(verbose_name='Price')),
                ('term', models.PositiveSmallIntegerField(default=1, verbose_name='Term')),
                ('work_order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WorkOrderRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('text', models.TextField(verbose_name='Text')),
                ('price_from', models.PositiveIntegerField(verbose_name='Price From')),
                ('price_to', models.PositiveIntegerField(null=True, verbose_name='Price Up To')),
                ('term_from', models.PositiveIntegerField(verbose_name='term From')),
                ('term_to', models.PositiveIntegerField(null=True, verbose_name='term To')),
                ('status', models.CharField(choices=[(0, 'Active'), (1, 'Approved'), (2, 'Declined')], max_length=60, verbose_name='Status')),
                ('is_favourite', models.BooleanField(default=False, verbose_name='Is Favourite')),
                ('employee', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='work_orders_requests', to='users.employeeprofile', verbose_name='Employee')),
                ('work_order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='work_requests', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WorkOrderPaymentStep',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('summary', models.CharField(max_length=100, verbose_name='Title')),
                ('price', models.PositiveIntegerField(verbose_name='Price')),
                ('work_order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payment_steps', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EmployeeFavouriteWorkOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favourite_work_orders', to='users.employeeprofile', verbose_name='Employee')),
                ('work_order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favourites_employees', to='market.workorder', verbose_name='Work Order')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]