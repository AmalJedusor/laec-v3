import glob, os

from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify
from django.utils.html import strip_tags
from core.models import Chapter, Article, UrlData, Part
class Command(BaseCommand):
    def handle(self, *args, **options):
        Article.objects.all().delete()
        Chapter.objects.all().delete()
        UrlData.objects.all().delete()
        id = 0
        for file in sorted(glob.glob("programme-v2/partie-*/*")):
            print(file)
            for subfile in sorted(glob.glob(file+"\\*" )):
                print(subfile)
            
            