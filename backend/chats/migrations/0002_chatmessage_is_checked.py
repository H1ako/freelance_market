# Generated by Django 4.2.7 on 2023-11-25 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatmessage',
            name='is_checked',
            field=models.BooleanField(default=False, verbose_name='Is Checked'),
        ),
    ]
