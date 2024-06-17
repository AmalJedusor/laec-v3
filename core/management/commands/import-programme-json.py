
import glob, os
import json
from turtle import update
from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify
from django.utils.html import strip_tags
from core.models import Chapter, Article, UrlData, Part, Measure

import markdown_to_json.scripts.md_to_json as md_to_json

from core.management.md_to_json import jsonify_markdown

class Command(BaseCommand):
    Measure.objects.all().delete()
    def handle(self, *args, **options):
        id = 0
        measure_id = 1
        for file in sorted(glob.glob("programme-json/partie-*/*")):
            if "!index.md" in file:
                # explication de la partie

                print(file)

                output_part = json.loads(jsonify_markdown(file,None).encode('utf8'))


                if "Forewords" in output_part:
                    print('forewords')
                    forewords = output_part["Forewords"]
                    part_number=int(file.split('partie-')[1].split(os.path.sep)[0])

                    part = Part.objects.get(number = str(part_number))
                    part.forewords = forewords
                    part.save()

                if "Afterwords" in output_part:
                    print('afterwords')
                    forewords = output_part["Afterwords"]
                    part_number=int(file.split('partie-')[1].split(os.path.sep)[0])

                    part = Part.objects.get(number = str(part_number))
                    part.afterwords = forewords
                    part.save()


                print('---------------------------------------------------------')

                id += 1
                continue
            for subfile in sorted(glob.glob(file+os.path.sep*2 +"*" )):
                if "!index.md" in subfile:
                    output_chap = json.loads(jsonify_markdown(subfile,None).encode('utf8'))
                    print(subfile)
                    print(output_chap["Titre"])
                    print('---------------------------------------------------------')
                # explication du chapitre

                    continue
                # section
                output = json.loads(jsonify_markdown(subfile,None).replace('None','null').encode('utf8'))
                chapter_number = int(subfile.split('chapitre-')[1].split(os.path.sep)[0])
                number= int(subfile.split(os.path.sep)[-1].replace('.md', ''))

                title = output["Titre"]
                entity="section"

                asavoir = ""
                if "A_Savoir" in output:
                    asavoir = output["A_Savoir"]

                    article = Article.objects.get(number = str(number))

                    article.asavoir = asavoir
                    article.save()
                if "Cle" in output:
                    key = output["Cle"]
                    article = Article.objects.get(number = str(number))
                    article.key = key
                    article.save()
                    Measure(
                        number= measure_id,
                        section = article,
                        text = key,
                        key = True
                         ).save()
                    measure_id +=1
                if "Mesures" in output:
                    measures = output["Mesures"]
                    article = Article.objects.get(number = str(number))
                    for mesure in measures:
                        Measure(
                        number= measure_id,
                        section = article,
                        text = mesure,
                         ).save()
                        measure_id +=1
                    article.save()
                if "Forewords" in output:
                    forewords = output["Forewords"]
                    article = Article.objects.get(number = str(number))
                    article.forewords = forewords
                    article.save()

                if "Afterwords" in output:
                    forewords = output["Afterwords"]
                    article = Article.objects.get(number = str(number))
                    article.afterwords = forewords
                    article.save()
