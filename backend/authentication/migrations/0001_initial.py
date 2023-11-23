# Generated by Django 4.2.7 on 2023-11-23 16:18

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0005_alter_user_managers_remove_user_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PhoneNumberConfirmation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[(0, 'Sent'), (1, 'Approved'), (2, 'Error'), (3, 'Expired')], max_length=50, verbose_name='Status')),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True, verbose_name='Phone Number')),
                ('code', models.CharField(max_length=50, verbose_name='Code')),
                ('number_of_attempts', models.PositiveSmallIntegerField(default=0, verbose_name='Number of attempts')),
                ('last_attempt_at', models.DateField(blank=True, null=True, verbose_name='Last Attempt At')),
                ('auth_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='phone_number_confirmations', to='users.userauthprofile', verbose_name='Auth Profile')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EmailConfirmation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('code', models.CharField(max_length=50, verbose_name='Code')),
                ('number_of_attempts', models.PositiveSmallIntegerField(default=0, verbose_name='Number of attempts')),
                ('status', models.CharField(choices=[(0, 'Sent'), (1, 'Approved'), (2, 'Error'), (3, 'Expired')], max_length=50, verbose_name='Status')),
                ('last_attempt_at', models.DateField(blank=True, null=True, verbose_name='Last Attempt At')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('auth_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='email_confimations', to='users.userauthprofile', verbose_name='Auth Profile')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]