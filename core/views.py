
from random import choice
from django.shortcuts import render, redirect
import markdown
from .models import Article, Measure, Part, UrlData, ExternalPage, NextPrevReferences
from haystack.query import SQ

from django.http import HttpResponse, HttpResponseNotFound, Http404
import os
from elasticsearch import Elasticsearch
from django.utils.html import strip_tags
#import pandas as pd
from elasticsearch_dsl import Search
from elasticsearch_dsl.connections import connections
from elasticsearch_dsl import Q
import ast
import json
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist


import logging


# Get an instance of a logger
logger = logging.getLogger(__name__)


def simple_md_to_html(md):
    CITATION_RE = r'(\*)([^\*]+)\1'
    QUOTE_RE = r'(\_)([^\_]+)\1'
    import re
    md = re.sub(QUOTE_RE,r'<span class="quote">\2</span>',md)
    md = re.sub(CITATION_RE,r'<span class="citation">\2</span>',md)
    return md

def home(request):
    return render(request, "newhome.html",{ 'host': settings.PROD_HOST})
    return render(request, "home.html")

def measure(request,n,m):
    redirect(f'/s',n,"slfksksf",m)


def load_nav_tree():
    import json
    import os
    with open(os.path.join('core','data','navtree.json'),'r') as f:
        nav = json.loads(f.read())
    return nav

def toc(request):
    parts = Part.objects.all()
    for p in parts:
        p.articles_ordered = []
    for c in sorted(Article.objects.all(),key=lambda x:int(x.number)):
        print(c.part_number);
        parts[int(c.part_number) - 1].articles_ordered.append(c)
        print(c);

    return render(request, "toc.html",{
        'host': settings.PROD_HOST,
        #'chapters': chapter_orders,
        'parts': parts

    })

def mentions(request):

    return render(request, "mentions-legales-new.html")

def shorten_text(txt,length):
    if len(txt)>length and length>3:
        txt = txt[:length-3] + '...'
    return txt



def get_prev_next(id):

    try:
        previd =  NextPrevReferences.objects.get(id = id-1)
    except ObjectDoesNotExist:
        previd = None
    try:
        nextid =  NextPrevReferences.objects.get(id = id+1)
    except ObjectDoesNotExist:
        nextid =  None         
    if previd:
        if previd.entity == 'section':
            prev  = Article.objects.get(id = (id)-1)
            prev.desc = "Section précédente"
            prev.url = "/section/"

        elif previd.entity == 'part':
            prev = Part.objects.get(id = id-1)
            prev.desc = "Partie précédente"
            prev.url = "/partie/"
            prev.part_number = prev.number
    else:
        prev = None

    if nextid:
        if nextid.entity== 'section':
            
            next = Article.objects.get(id = id+1)
            next.desc = "Section suivante"
            next.url = "/section/"
        elif nextid.entity == 'part':
            next  = Part.objects.get(id = id+1)
            next.desc = "Partie suivante"
            next.url = "/partie/"
            next.part_number = next.number
    else:
        next = None

    return prev,next

def part(request, n, slug=''):
    part = Part.objects.get(number=n)

    prev,next = get_prev_next(part.id)

    part.article_ordered = sorted(part.article_set.all(),key=lambda x:int(x.number))
    part.forewords = simple_md_to_html(part.forewords)
    part.part_number = part.number
    return render(request, "part.html", {
        'host': settings.PROD_HOST,
        'subject': part,
        'content': markdown.Markdown().convert(part.content),
        'next': next,
        'prev': prev,
        'description': shorten_text(part.forewords,124),
        'book_navigation':None,
        'title' : part.title,
    })



def chapter(request, n, slug=''):
    chapter = Chapter.objects.get(number=n)

    prev,next = get_prev_next(chapter.id)

    return render(request, "chapter.html", {
        'host': settings.PROD_HOST,
        'subject': chapter,
        'content': markdown.Markdown().convert(chapter.text),
        'description':'',
        'next': next,
        'prev': prev,
        'book_navigation':None,
        'title' : chapter.sub_title,
    })

def section(request, n, slug,m='None'):

    article = Article.objects.get(number=n)
    res = article.measures
    article.measures =  Measure.objects.filter(section_id= article.number).exclude(key=True)
    try:
      article.key =  Measure.objects.get(section_id= article.number,key=True)
    except Measure.DoesNotExist:
      article.key = None

    prev,next = get_prev_next(article.id)


    searchterms = request.GET.get('q','').replace(',','|')
    def highlight(item):
        return re.sub(r'('+searchterms+')',r'<mark>\1</mark>',item)
    if searchterms and article.forewords:
        article.forewords = highlight(article.forewords)
    if article.key:
        article.key.text_high = highlight(article.key.text) if searchterms else article.key.text
    if article.measures:
        for m in article.measures:
            spl = m.text.split('|')
            if len(spl)>1:
                m.text = spl[1]
                m.pretext = spl[0]
            m.text_high = highlight(m.text) if searchterms else m.text

    article.title_high = highlight(article.title) if searchterms else article.title

    article.forewords = simple_md_to_html(article.forewords)


    return render(request, "section.html", {
        'host': settings.PROD_HOST,
        'subject': article,
        'content': markdown.Markdown().convert(article.text),
        'next': next,
        'prev': prev,
        'description': shorten_text(article.forewords,124),
        'book_navigation':None,
        'title' : article.title,
    })


def random(request):
    article = choice(list(Article.objects.all()))

    return redirect(f'/section/{article.number}/{article.slug}')


def fin(request):
    baseurl = request.build_absolute_uri()
    return render(request, "fin.html", { 'baseurl': baseurl })



def recherche(request):
    """My custom search view."""


    # further filter queryset based on some set of criteria
    req = request.GET.get('q','')
    #print(req)
  #  res  = queryset.filter(content_auto=req)
    #highlight = MyHighlighter(req, html_tag='mark', css_class='found', max_length=35)
    #for r in res:
        #   highlight.highlight(r.content)

        #  highlight.highlight(r.content)
    #elastic_client = Elasticsearch([settings.ELASTICSEARCH_HOST])
    #from core.models import ExternalPage
    #logging.warning(ExternalPage.objects.all())
    #elastic_client = Elasticsearch(['http://es:9200'])
    # create a Python dictionary for the search query:
    search_param = {
        "query": {
            "simple_query_string": {
                "query": req,
                "fields": ["title_auto","content_auto"],
                "default_operator": "or",
            }
            },
                "highlight" : {
                "require_field_match": True,
                "pre_tags" : ["<mark>"],
                    "post_tags" : ["</mark>"],
                "fields": {
                     "title": {
                "fragment_size": 300,
                     },
                 "content": {
                "fragment_size": 300,


            }
                }
    }
    }
    # get a response from the cluster
    #response = elastic_client.search(index="haystack", body=search_param)
    #logger.warning(response)
    print("on crée la co")
    connections.create_connection(hosts=[settings.ELASTICSEARCH_HOST], timeout=20)
    s = Search(index='haystack')
    q = Q("multi_match", query=req, fields=['title','content','title_auto','content_auto'],fuzziness=1, prefix_length=2)
    s = s.query(q).extra(from_=0, size=100)
    s = s.highlight('title', 'content','title_auto','content_auto',pre_tags=["<mark>"],post_tags=["</mark>"],require_field_match=True, number_of_fragments=1, fragment_size=300)
    s = s.execute()
    print(s)
    def extract_kw(s):
        kw = s.split('<mark>')
        keywords = []
        if len(kw)>1:
            for ss in kw[1:]:
                keywords.append(ss.split('</mark>')[0])
        return keywords
    firstout = True
#    {% load highlight %}

#    {% link_icon = 'link' %}
#    {% if result.entity is chapitre %}
#    {% link_icon = result.entity.icon ?: 'phi' %}
#    {% elseif result.entity is section %}
#    {% link_icon = result.entity.chapter.icon %}
#    {% endif %}
    laec_count = 0
    external_count = 0
    for i,result in enumerate(s):
        print(result)
        if result.entity == 'externalpage':
            external_count += 1
        else:
            laec_count += 1
        #logging.warning(result.title+result.entity)
        result.order = i + 1000 if result.entity == 'externalpage' else 0
        if result.entity == 'externalpage' and firstout:
            result.first = True
            firstout = False
        keywords = []
        for f in ['content','title','content_auto','title_auto']:
            if f in result.meta.highlight:
                keywords += extract_kw(result.meta.highlight[f][0])
        result.keywords = sorted(list(set(keywords)),key=lambda x:len(x), reverse=True)


    return render(request, "recherche.html", {
        'host': settings.PROD_HOST,
        'query': sorted(list(s),key=lambda e:e['order']),
        'laec_count': laec_count,
        'external_count': external_count,
        'request' :req
    })



def error_404(request,exception=None):
    return render(request, "404.html", {})


mesures_path = os.path.join('generation_visuels','mesures.json')
if os.path.exists(mesures_path):
    with open(mesures_path,'r') as f:
        mesures_dict = json.loads(f.read())
        mesures_list = sorted(list(mesures_dict.values()),key=lambda x:int(x['nmesure']))
else:
    mesures_dict = {}
    mesures_list = []

sections_path = os.path.join('generation_visuels','sections.json')
if os.path.exists(sections_path):
    with open(sections_path,'r') as f:
        sections_dict = json.loads(f.read())
else:
    sections_dict = {}



def redirect_short_cp(request,n):
     print(request.path)
     content = UrlData.objects.get(slug=request.path)
     print(content)
     return redirect( content.url,n = n)

def redirect_short(request,n):
     content = UrlData.objects.get(slug=request.path)

     shortlink = 's{n}'.format(n=n)
     section = sections_dict.get(shortlink)
     if not section:
         return HttpResponseNotFound('<h1>Section inconnue</h1>')

     return redirect(content.url)
     return render(request, "card.html", {
          'host': settings.PROD_HOST,
          'titre': shorten_text(re.sub(r'(\*)([^\*]+)\1',r'\2',section['chapitre']),50),
          'description': shorten_text(re.sub(r'(\*)([^\*]+)\1',r'\2',section['section']),124),
          'shortlink': shortlink,
          'redirect' : content.url
      })



def redirect_short_measure(request,n,m=0):
     content = UrlData.objects.get(slug="/s"+n+"/")

     shortlink = 's{n}m{m}'.format(n=n,m=m)
     mesure = mesures_dict.get(shortlink)
     if not mesure:
         return HttpResponseNotFound('<h1>Mesure inconnue</h1>')

     return render(request, "card.html", {
         'host': settings.PROD_HOST,
         'titre': shorten_text(re.sub(r'(\*)([^\*]+)\1',r'\2',mesure['section']),50),
         'description': shorten_text(re.sub(r'(\*)([^\*]+)\1',r'\2',mesure['mesure']),124),
         'shortlink': shortlink,
         'redirect' : content.url+"#mesure-"+m
     })

#Title mesure & section : Nom de la section (si < 50 caractères sinon 47 premiers char + "...")
#Descr mesure : Texte de la mesure (si < 124 caractères sinon 121 premiers char + "...")
#Descr section : Texte de la section (si < 124 caractères sinon 121 premiers char + "...")



import os
import re
def visuel(request, v):
    couleurs = [
        ('#ed8f0e','#ffd397'), #1
        ('#32bf7c','#a9e7c9'), #2
        ('#f06e6e','#ffc7c7'), #3
        ('#412883','#aa9ec9'), #4
        ('#679ae7','#c0d6f7ff'), #5
    ]
    sections_path = os.path.join('generation_visuels','sections.json')
    if os.path.exists(sections_path):
        with open(sections_path,'r') as f:
            sections_dict = json.loads(f.read())
    else:
        sections_dict = {}

    mesures_path = os.path.join('generation_visuels','mesures.json')
    if os.path.exists(mesures_path):
        with open(mesures_path,'r') as f:
            mesures_dict = json.loads(f.read())
    else:
        mesures_dict = {}


    if v in sections_dict.keys():
        section  = sections_dict[v]
        background = 'mP{p}.png'.format(p=section['npartie'])
        section['couleurs'] = couleurs[section['npartie']-1]
        section['background'] = background
        section['section'] = re.sub(r'(\*)([^\*]+)\1',r'<span class="highlight">\2</span>',section['section'])
        return render(request,"visuels/section.html", section)
        #return render(request,"visuels/"+v+".html")

    if v in mesures_dict.keys():
        mesure  = mesures_dict[v]
        background = 'm{c}P{p}.png'.format(c='c' if mesure['cle'] else '',p=mesure['npartie'])
        mesure['couleurs'] = couleurs[mesure['npartie']-1]
        mesure['background'] = background
        mesure['section'] = re.sub(r'(\*)([^\*]+)\1',r'\2',mesure['section'])
        mesure['mesure'] = re.sub(r'(\*)([^\*]+)\1',r'<span class="highlight">\2</span>',mesure['mesure'])
        return render(request,"visuels/mesure.html", mesure)
    return HttpResponseNotFound('<h1>Pas de visuel</h1>')


grid_nbitems = 21


livrets_nbitems = 20
def livrets_plans(request,p=0):
    ext_list = sorted(ExternalPage.objects.all(), key=lambda x:x.doctype)
    livrets = [e for e in ext_list if e.doctype == 'Livret']
    plans = [e for e in ext_list if e.doctype == 'Plan']
    if p>0:
        exts = ext_list[(p-1)*livrets_nbitems:p*livrets_nbitems]
    else:
        exts = ext_list[:livrets_nbitems]

    return render(request, "livrets_plans.html",dict(livrets=livrets, plans=plans, host=settings.PROD_HOST))

import unidecode


def visuels(request,p=0,gp=1):
    chapitres=sorted(Chapter.objects.all(), key=lambda x:int(x.number))
    q = request.GET.get('q','')
    measures = [m for m in mesures_list if (p==0 or m['nchapitre'] == int(p))]
    if q!='':
        import unidecode
        uq = ' '+unidecode.unidecode(q).lower()+' '
        measures = [m for m in measures if uq in m['mesure_search']]
    if gp>0:
        measures=measures[(gp-1)*grid_nbitems:gp*grid_nbitems]
    else:
        measures=measures[:grid_nbitems]

    return render(request, "visuels/grid.html",dict(p=str(p),q=q,mesures=measures,chapitres=chapitres, host=settings.PROD_HOST))
