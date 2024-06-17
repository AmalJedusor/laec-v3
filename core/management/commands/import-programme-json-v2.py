
import glob, os
import json
from turtle import update
from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify
from django.utils.html import strip_tags
from core.models import Article, UrlData, Part, Measure, NextPrevReferences

import markdown_to_json.scripts.md_to_json as md_to_json

from core.management.md_to_json import jsonify_markdown

class Command(BaseCommand):
    Measure.objects.all().delete()
    NextPrevReferences.objects.all().delete()

    UrlData.objects.all().delete()
    Article.objects.all().delete()
    Part.objects.all().delete()    
    def handle(self, *args, **options):
        
        def make_searchable(s):
            return s.replace('’',"'")
        
        id = 0
        measure_id = 1
        for file in sorted(glob.glob("programme-v3/partie-*/*")):
            if "!index.md" in file:
                # explication de la partie
                print(file)
                output_part = json.loads(jsonify_markdown(file,None).encode('utf8'))
                p = Part(id = id,title=output_part["Titre"],main_title=output_part["Titre"],  number=int(file.split('partie-')[1].split(os.path.sep)[0]))                        
                p.slug = slugify(output_part["Titre"])
                p.entity = 'part'
                print(p.title)
                if "Forewords" in output_part:
                    print('forewords')
                    forewords = output_part["Forewords"]
                    p.forewords = forewords
                if "Afterwords" in output_part:
                    print('afterwords')
                    forewords = output_part["Afterwords"]
                    p.afterwords = forewords
                npr = NextPrevReferences(id=id, entity=p.entity)                        
                npr.save();
                p.save()
                print('---------------------------------------------------------')
                id += 1
                continue
            # section
            output = json.loads(jsonify_markdown(file,None).replace('None','null').encode('utf8'))
            article_number = int(file.split(os.path.sep)[-1].replace('.md', ''))
            article = Article(title=make_searchable(output["Titre"]), number=article_number)                        
            article.part_number = int(file.split('partie-')[1].split(os.path.sep)[0])
            article.part = Part.objects.get(number = str(article.part_number))
            article.entity="section"
            article.slug = slugify(output["Titre"])
            article.content=  article.content + " "+ str(article.title)
            UrlData(url="/section/"+str(article_number)+"/"+slugify(article.title),
                        slug="/s"+str(article_number)+"/"
                        ).save()
            article.id = id
            npr = NextPrevReferences(id=id, entity=article.entity)                        
            npr.save();       
            id += 1
            asavoir = ""
            if "A_Savoir" in output:
                asavoir = output["A_Savoir"]
                article.asavoir = asavoir
            if "Forewords" in output:
                forewords = output["Forewords"]
                article.forewords = forewords
                article.content =  article.content +  " "+  forewords
            if "Afterwords" in output:
                afterwords = output["Afterwords"]
                article.afterwords = afterwords
                article.content = article.content +   " "+ afterwords
            if "Cle" in output:
                key = output["Cle"]
                article.content = article.content +  " "+ key   
            if "Mesures" in output:
                measures = output["Mesures"]   
                article.content= article.content + " "+  str(measures)
            article.content = make_searchable(article.content)
            article.save()
     
            article = Article.objects.get(number = str(article_number))     
            if "Cle" in output:
                key = output["Cle"]
                Measure(
                    number= measure_id,
                    section = article,
                    text = key,
                    key = True
                        ).save()
                measure_id +=1
            if "Mesures" in output:
                measures = output["Mesures"]
                for mesure in measures:
                    Measure(
                    number= measure_id,
                    section = article,
                    text = mesure,
                        ).save()
                    measure_id +=1  
            print(article.content)

        


          