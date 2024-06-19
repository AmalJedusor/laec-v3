import glob, os

from django.core.management.base import BaseCommand

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('ids', nargs='+', type=str)
        parser.add_argument(
            '--rebuild',
            action='store_true',
            help='Regénérer les visuels',
        )


    def handle(self, *args, **options):

        couleurs = [
            ('#ed8f0e','#ffd397'), #1
            ('#32bf7c','#a9e7c9'), #2
            ('#f06e6e','#ffc7c7'), #3
            ('#412883','#aa9ec9'), #4
            ('#679ae7','#c0d6f7ff'), #5
        ]

        import requests
        import csv
        import io
        import re

        response = requests.get('https://docs.google.com/spreadsheet/ccc?key=1NBkcDOXTXGwajAWpnueTUzihJ1z_j2ydD3dO6-iuA-k&output=csv')
        assert response.status_code == 200, 'Wrong status code'
        csvfile = io.StringIO(response.content.decode('utf8'))
        csvfile.readline()
        reader = csv.DictReader(csvfile)

        import hashlib
        import json
        import os

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
        npartie = 0
        chapitre = ""
        nchapitre = 0
        section = ""
        nsection = 0
        nmesure = 0
        for row in reader:
            if row['PARTIE']!= partie:
                partie = row['PARTIE']
                npartie += 1
                print(npartie,partie)
            if row['CHAPITRE'].strip() and row['CHAPITRE'].strip() != chapitre:
                chapitre = row['CHAPITRE'].strip()
                nchapitre += 1
                chapitres.append((npartie,partie,nchapitre,chapitre.split(':')[1].strip()))
            if row['SECTION N°'] and row['SECTION N°'] != str(nsection):
                section = row['SECTION'].strip()
                nsection += 1
                if str(nsection) != row['SECTION N°']:
                    print('PB',row)
                    exit()

                sec = [npartie,partie,nchapitre,chapitre.split(':')[1].strip(),nsection,section,0]
                hash = hashlib.md5(json.dumps(sec).encode('utf8')).hexdigest()
                sec.append(hash!=sections_dict.get('c{c}s{s}'.format(c=nchapitre,s=nsection),{'hash':''})['hash'])
                sec.append(hash)
                sections.append(sec)
            if row['MESURE']:
                nmesure += 1
                if str(nmesure) != row['MESURE N°']:
                    print('PB',nmesure,row)

                mes = [npartie,partie,nchapitre,chapitre,nsection,section,nmesure,row['MESURE'],row['MESURE CLEF']=='OUI',0]
                hash = hashlib.md5(json.dumps(mes).encode('utf8')).hexdigest()
                mes.append(hash!=mesures_dict.get('s{s}m{m}'.format(s=nsection,m=nmesure),{'hash':''})['hash'])
                mes.append(hash)
                mesures.append(mes)

        def make_searchable(s):
            import unidecode
            import re
            return ' '+re.sub(r"[^a-z ]"," ",unidecode.unidecode(s.lower()))+' '

        mesures_dict = dict(('s{s}m{m}'.format(s=nsection,m=nmesure),dict(shortlink='s{s}m{m}'.format(s=nsection,m=nmesure),npartie=npartie,partie=partie,nchapitre=nchapitre,chapitre=chapitre,nsection=nsection,section=section,nmesure=nmesure,mesure=mesure,mesure_search=make_searchable(mesure),cle=cle,adjust=adjust,hash=hash)) for npartie,partie,nchapitre,chapitre,nsection,section,nmesure,mesure,cle,adjust,new,hash in mesures)
        import json
        with open(mesures_path,'w') as f:
            f.write(json.dumps(mesures_dict))

        sections_dict = dict(('s{s}'.format(s=nsection),dict(shortlink='s{s}'.format(s=nsection),npartie=npartie,partie=partie,nchapitre=nchapitre,chapitre=chapitre,nsection=nsection,section=section,adjust=adjust,hash=hash)) for npartie,partie,nchapitre,chapitre,nsection,section,adjust,new,hash in sections)
        import json
        with open(sections_path,'w') as f:
            f.write(json.dumps(sections_dict))


        from selenium import webdriver
        from selenium.webdriver.common.keys import Keys
        from selenium.webdriver.common.by import By
        from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

        soptions = webdriver.ChromeOptions()
        soptions.add_argument("--no-sandbox")
        soptions.add_argument("--disable-gpu")
        soptions.add_argument("--window-size=1400,1000")
        soptions.add_argument("--disable-dev-shm-usage")
        soptions.add_argument("--headless")
        soptions.add_argument('--allow-running-insecure-content')
        soptions.add_argument('--ignore-certificate-errors')





        import os
        import time
        import random
        import socket
        from PIL import Image
        print("OK")
        for npartie,partie,nchapitre,chapitre,nsection,section,adjust,new,hash in sections:
            if not 'update' in options['ids'] and not 'all' in options['ids'] and not 'sections' in options['ids'] and options['ids'] and not "s{n}".format(n=nsection) in options['ids']:
                continue
            name = "s{s}".format(c=nchapitre,s=nsection)
            basepath = os.path.join('core','static','visuels')
            imgpath = os.path.join(basepath,name+'.png')
            jpgpath = os.path.join(basepath,name+'.jpg')
            print(jpgpath)
            print(name)

            if not os.path.exists(jpgpath):
                im1 = Image.open(imgpath)
                im1.convert('RGB').save(jpgpath)
                print(jpgpath)



        for npartie,partie,nchapitre,chapitre,nsection,section,nmesure,mesure,cle,adjust,new,hash in mesures:
            if not 'update' in options['ids'] and not 'all' in options['ids'] and not 'sections' in options['ids'] and options['ids'] and not "m{n}".format(n=nmesure) in options['ids']:
                continue
            name = "s{s}m{m}".format(s=nsection,m=nmesure)
            basepath = os.path.join('core','static','visuels')
            imgpath = os.path.join(basepath,name+'.png')
            jpgpath = os.path.join(basepath,name+'.jpg')
            if not os.path.exists(jpgpath):
                im1 = Image.open(imgpath)
                im1.convert('RGB').save(jpgpath)
                print(jpgpath)








