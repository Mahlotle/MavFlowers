# Generated by Django 5.0.3 on 2024-06-21 08:03

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("ecom", "0010_alter_product_description"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="price",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=8),
        ),
    ]