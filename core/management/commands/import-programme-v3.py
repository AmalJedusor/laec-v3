import glob, os

from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify
from django.utils.html import strip_tags
from core.models import Chapter, Article, UrlData, Part, Measure


def build_nav_tree():
    nav = [dict(id=p.id, number=p.number, entity="part") for p in Part.objects.all()]

    nav += [ dict(id=c.id, number=c.number, entity="chapter") for c in Chapter.objects.all()]
    nav += [ dict(id=a.id, number=a.number,entity="section") for a in Article.objects.all()]
    nav.sort(key=lambda x:int(x['id']))

    def get_next(nav,i):
        i += 1
        while i<len(nav) and nav[i]['entity']=='part':
            i += 1
        return dict(next_id=i,next_entity=nav[i]['entity']) if i<len(nav) else dict(next_id = None,next_entity = None)

    def get_prev(nav,i):
        i -= 1
        while i>0 and (nav[i]['entity']!='section'):
            i -= 1
        return dict(prev_id=i,prev_entity=nav[i]['entity']) if i>=0 else dict(prev_id = None,prev_entity = None)

    for i,n in enumerate(nav):
        n.update(get_next(nav,i))
        n.update(get_prev(nav,i))


    import json
    import os
    with open(os.path.join('core','data','navtree.json'),'w') as f:
        f.write(json.dumps(nav))


class Command(BaseCommand):
    def handle(self, *args, **options):
        Measure.objects.all().delete()
        UrlData.objects.all().delete()
        Article.objects.all().delete()
        Chapter.objects.all().delete()
        Part.objects.all().delete()

        def make_searchable(s):
            return s.replace('’',"'")

        id = 0
        for file in sorted(glob.glob("programme-v3/partie-*/*")):
            if "!index.md" in file:
                part_title = open(file,encoding='utf-8').read().split('\n')[0].strip()
                print(part_title)
                part_number=int(file.split('partie-')[1].split(os.path.sep)[0])
                content =strip_tags('\n'.join(open(file,encoding='utf-8').read().split('\n')[1:]))


                Part(
                        number= part_number,
                        slug=slugify(part_title),
                        entity="partie",
                        title=make_searchable(part_title),
                        id=id,
                        main_title=part_title,
                        content= make_searchable(strip_tags('\n'.join(open(file,encoding='utf-8').read().split('\n')[1:]))),
                ).save()

                UrlData(url="/partie/"+str(part_number)+"/"+slugify(part_title),
                slug="/p"+str(part_number) +"/"
                ).save()
                id += 1            
                continue
            else:
                chapter_number = int(file.split('partie-')[1].split(os.path.sep)[0])
                part = Part.objects.get(number=chapter_number)
                title = open(file,encoding='utf-8').read().split('\n')[0].strip()
                number= int(file.split(os.path.sep)[-1].replace('.md', ''))


                Article(
                    number=number,
                    slug=slugify(title),
                    entity="section",
                    title=make_searchable(title),
                    part_number=part_number,
                    id=id,
                    content = make_searchable(strip_tags('\n'.join(open(file,encoding='utf-8').read().split('\n')[1:]))),
                    text='\n'.join(open(file,encoding='utf-8').read().split('\n')[1:]),
                    chapter=part,
                ).save()

                UrlData(url="/section/"+str(number)+"/"+slugify(title),
                        slug="/s"+str(number)+"/"
                        ).save()
                id +=1    




        build_nav_tree()
