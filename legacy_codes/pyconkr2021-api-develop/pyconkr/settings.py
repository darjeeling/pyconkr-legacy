"""
Django settings for pyconkr project.

Generated by 'django-admin startproject' using Django 3.2.3.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path

import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
import requests

BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-)$x@507chah=nr9do0a-z04z*5bc$j$a$$vcv7y#rt3bn=7)5b'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1',
                 'localhost',
                 'dev-pycon-kr-2021-1145975631.ap-northeast-2.elb.amazonaws.com',
                 'dev.2021.api.pycon.kr',
                 '2021.api.pycon.kr',
                ]

# ELB Health check
if 'ECS_CONTAINER_METADATA_URI_V4' in os.environ:
    ALLOWED_HOSTS += [ip for network in requests.get(os.environ['ECS_CONTAINER_METADATA_URI_V4']).json()['Networks']
                      for ip in network['IPv4Addresses']]

if 'ECS_CONTAINER_METADATA_URI' in os.environ:
    ALLOWED_HOSTS += [ip for network in requests.get(os.environ['ECS_CONTAINER_METADATA_URI']).json()['Networks']
                      for ip in network['IPv4Addresses']]

print('ALLOWED_HOST: ', ALLOWED_HOSTS)

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'sorl.thumbnail',
    'import_export',
    'django_summernote',
    'storages',

    # CORS
    'corsheaders',

    # django app
    'sponsor',
    'program',
    'article',
    'log',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'pyconkr.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'pyconkr.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

if os.getenv('POSTGRES_NAME'):
    DATABASES['default'] = {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_NAME'),
        'HOST': os.getenv('POSTGRES_HOST'),
        'PORT': os.getenv('POSTGRES_PORT'),
        'USER': os.getenv('POSTGRES_USER'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD'),
    }

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'ko-kr'

TIME_ZONE = 'Asia/Seoul'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# django-summernote
X_FRAME_OPTIONS = "SAMEORIGIN"  # Refused to display 'http://127.0.0.1:8000/' in a frame because it set 'X-Frame-Options' to 'deny'. 이슈 해결

# AWS
AWS_ACCESS_KEY_ID = os.getenv('S3_AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('S3_AWS_SECRET_ACCESS_KEY')
AWS_S3_REGION_NAME = 'ap-northeast-2'

# S3
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3StaticStorage'
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
AWS_STORAGE_BUCKET_NAME = os.getenv('S3_AWS_STORAGE_BUCKET_NAME')    # TODO dev, prod 분리
AWS_QUERYSTRING_AUTH = False

# django-cors-headers
CORS_ALLOW_ALL_ORIGINS = True