from django.core.mail import send_mail
from django.template.loader import render_to_string

def send_welcome_email(user_email, username):
    subject = 'Welcome to meatbrokers!'
    html_message = render_to_string('welcome_email.html', {'username': username})
    send_mail(
        subject,
        '',
        'meatbrokers2024@gmail.com',  # Your Gmail address
        [user_email],
        html_message=html_message
    )
