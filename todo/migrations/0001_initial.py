# Generated by Django 4.1.6 on 2023-02-10 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('content', models.CharField(blank=True, max_length=500)),
                ('date', models.DateField(auto_now_add=True)),
                ('done', models.BooleanField(default=False, null=True)),
            ],
        ),
    ]
