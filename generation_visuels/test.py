from seleniumwire import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.support.ui import WebDriverWait

couleurs = [
    ('#ed8f0e','#ffd397'), #1
    ('#32bf7c','#a9e7c9'), #2
    ('#f06e6e','#ffc7c7'), #3
    ('#412883','#aa9ec9'), #4
    ('#679ae7','#c0d6f7ff'), #5
]

#EMPHASIS_RE = r'(\*)([^\*]+)\1'


import requests
import csv
import io
response = requests.get('https://docs.google.com/spreadsheet/ccc?key=1NBkcDOXTXGwajAWpnueTUzihJ1z_j2ydD3dO6-iuA-k&output=csv')
assert response.status_code == 200, 'Wrong status code'
csvfile = io.StringIO(response.content.decode('utf8'))
csvfile.readline()
reader = csv.DictReader(csvfile)




mesures = []
chapitres = []
sections = []

partie = ""
npartie = 0
chapitre = ""
nchapitre = 0
section = ""
nsection = 0
for row in reader:
    if row['PARTIE']!= partie:
        partie = row['PARTIE']
        npartie += 1
        print(npartie,partie)
    if row['CHAPITRE'].strip() and row['CHAPITRE'].strip() != chapitre:

        chapitre = row['CHAPITRE'].strip()
        nchapitre += 1
        chapitres.append((npartie,partie,nchapitre,chapitre.split(':')[1].strip()))
    if row['SECTION'].strip() and row['SECTION'].strip() != section:
        section = row['SECTION'].strip()
        nsection += 1
        sections.append((npartie,partie,nchapitre,chapitre.split(':')[1].strip(),nsection,section,0))
    if row['MESURE']:
        mesures.append((npartie,partie,nchapitre,chapitre,nsection,section,row['MESURE N°'],row['MESURE'],row['MESURE CLEF']=='OUI',0))
    #print(row)


#for m in response.content.decode('utf8').split('\n'):
#    print(m)
import re
#emphasis = re.compile(r"^(.*?)%s(.*)$" % EMPHASIS_RE, re.DOTALL | re.UNICODE)

#"""Lorem ipsum dolor sit amet</span> consectetur adipisicing elit. Molestias quo iste
#<span class="highlight">sapiente doloremque debitis</span>, maiores quia. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium"""

from jinja2 import Environment, FileSystemLoader
env = Environment(loader = FileSystemLoader("."))
mesure_template = env.get_template("mesure.html")
section_template = env.get_template("section.html")
options = webdriver.ChromeOptions()
#options.add_argument("--user-data-dir=userdata")
options.add_argument('--allow-running-insecure-content')
options.add_argument('--ignore-certificate-errors')
options.add_argument('--headless')

driver = webdriver.Chrome(options=options,
                              executable_path="/usr/bin/chromedriver")
driver.set_window_size(1400, 1000)

import time
import random
#random.shuffle(sections)
for v in ('','_alt'):
    for npartie,partie,nchapitre,chapitre,nsection,section,adjust in sections:
        name = "c{c}s{s}".format(c=nchapitre,s=nsection)
        mesure = re.sub(r'(\*)([^\*]+)\1',r'<span class="highlight">\2</span>',section)
        background = 'mP{n}{v}.png'.format(n=npartie,v=v)
        html_content = section_template.render(adjust=adjust,background=background,nchapitre=nchapitre, chapitre=chapitre, nsection=nsection, section=section,couleurs=couleurs[npartie-1],shortlink=name)

        with open('visuels/html/'+name+v+'.html','w') as f:
            f.write(html_content)
        driver.get('file:///home/olivier/devs/laecV2/gen/visuels/html/'+name+v+'.html')
        time.sleep(1)
        driver.find_element(By.ID, 'mesure').screenshot('visuels/png/Sections/'+name+v+'.png')


for v in ('','_alt'):
    for npartie,partie,nchapitre,chapitre,nsection,section,nmesure,mesure,cle,adjust in mesures:
        name = "s{s}m{m}".format(s=nsection,m=nmesure)
        mesure = re.sub(r'(\*)([^\*]+)\1',r'<span class="highlight">\2</span>',mesure)
        background = ("mc" if cle else "m") + 'P{n}{v}.png'.format(n=npartie,v=v)
        html_content = mesure_template.render(adjust=adjust,background=background,cle=cle,titre=section, titre_numero=nsection,couleurs=couleurs[npartie-1],mesure=mesure,shortlink=name)

        with open('visuels/html/'+name+v+'.html','w') as f:
            f.write(html_content)
        driver.get('file:///home/olivier/devs/laecV2/gen/visuels/html/'+name+v+'.html')
        time.sleep(1)
        driver.find_element(By.ID, 'mesure').screenshot('visuels/png/Mesures/'+name+v+'.png')
