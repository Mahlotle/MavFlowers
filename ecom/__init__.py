# In your __init__.py file
default_app_config = 'your_app_name.apps.YourAppNameConfig'

def ready():
    import ecom.signals  # Import your signal receivers here
