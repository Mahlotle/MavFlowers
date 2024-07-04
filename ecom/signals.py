# signals.py file

from django.db.models.signals import post_save

from django.dispatch import receiver
from django.core.mail import send_mail
from .models import Customer
from .email_utils import send_welcome_email

@receiver(post_save, sender=Customer)
def send_welcome_email_on_customer_creation(sender, instance, created, **kwargs):
    if created:
        user = instance.user
        send_welcome_email(user.email, user.username)
