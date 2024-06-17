import glob, os

from django.core.management.base import BaseCommand
from core.models import Chapter, Article, UrlData, Part, Measure

class Command(BaseCommand):
    def handle(self, *args, **options):

        import requests
        import csv
        import io
        import re
        import json
        import os

        try:
            response = requests.get('https://docs.google.com/spreadsheet/ccc?key=1NBkcDOXTXGwajAWpnueTUzihJ1z_j2ydD3dO6-iuA-k&output=csv')
            assert response.status_code == 200, 'Wrong status code'
            csvfile = io.StringIO(response.content.decode('utf8'))
            csvfile.readline()
            reader = csv.DictReader(csvfile)
            reader = list(reader)
            with open(os.path.join('core','data','gsheet.json'),'w') as f:
                f.write(json.dumps(reader))
        except:
            with open(os.path.join('core','data','gsheet.json'),'r') as f:
                reader = json.loads(f.read())

        import hashlib
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
        mesures = []
        chapitres = []
        sections = []

        partie = ""
        npartie = 1
        chapitre = ""
        nchapitre = 0
        section = ""
        nsection = 0
        nmesure = 0
        mesures_md = dict((m.number,m) for m in Measure.objects.all())
        articles_md = dict((m.number,m) for m in Article.objects.all())
        chapters_md = dict((m.number,m) for m in Chapter.objects.all())
        parts_md = dict((m.number,m) for m in Part.objects.all())


        for row in reader:
            if row['PARTIE']!= partie:
                partie = row['PARTIE']

                parts_md[str(npartie)].page = row['PAGE']
                parts_md[str(npartie)].shortlink = "p{partie}".format(partie=npartie)

                parts_md[str(npartie)].save()

                npartie += 1


            if row['CHAPITRE'].strip() and row['CHAPITRE'].strip() != chapitre:
                chapitre = row['CHAPITRE'].strip()
                nchapitre += 1
                chapters_md[str(nchapitre)].page = row['PAGE']

                chapters_md[str(nchapitre)].shortlink = "c{chapitre}".format(chapitre=nchapitre)
                chapters_md[str(nchapitre)].save()

                chapitres.append((npartie,partie,nchapitre,chapitre.split(':')[1].strip()))
            if row['SECTION N°'] and row['SECTION N°'] != str(nsection):
                section = row['SECTION'].strip()
                nsection += 1
                if str(nsection) != row['SECTION N°']:
                    print('PB',row)
                    exit()

                articles_md[nsection].page = row['PAGE']
                articles_md[nsection].shortlink = "s{section}".format(section=nsection)
                articles_md[nsection].save()

                sec = [npartie,partie,nchapitre,chapitre.split(':')[1].strip(),nsection,section,0]
                hash = hashlib.md5(json.dumps(sec).encode('utf8')).hexdigest()
                sec.append(hash!=sections_dict.get('c{c}s{s}'.format(c=nchapitre,s=nsection),{'hash':''})['hash'])
                sec.append(hash)
                sections.append(sec)
            if row['MESURE']:
                nmesure += 1
                if str(nmesure) != row['MESURE N°']:
                    print('PB',nmesure,row)
                #from thefuzz import fuzz
                #if (fuzz.ratio(row['MESURE'].replace('*',''),mesures_md[nmesure].text)<60):

                #    print(fuzz.partial_ratio(row['MESURE'].replace('*',''),mesures_md[nmesure].text))
                #    print(nsection,nmesure)
                #    print(row['MESURE'])
                #    print(mesures_md[nmesure].text)

                mesures_md[nmesure].page = row['PAGE']
                mesures_md[nmesure].shortlink = "s{section}m{mesure}".format(section=nsection,mesure=nmesure)

                mesures_md[nmesure].save()
                mes = [npartie,partie,nchapitre,chapitre,nsection,section,nmesure,row['MESURE'],row['MESURE CLEF']=='OUI',0]
                hash = hashlib.md5(json.dumps(mes).encode('utf8')).hexdigest()
                mes.append(hash!=mesures_dict.get('s{s}m{m}'.format(s=nsection,m=nmesure),{'hash':''})['hash'])
                mes.append(hash)
                mesures.append(mes)
