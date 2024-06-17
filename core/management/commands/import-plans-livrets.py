import glob, os

from django.core.management.base import BaseCommand
from core.models import ExternalPage

class Command(BaseCommand):

    def handle(self, *args, **options):

        import lxml.html
        from lxml import etree
        import requests
        import markdownify
        path = os.path.join('core','static','melenchon2022')
        self._id = 1000
        def get_html(url):
            r = requests.get(url)
            assert r.status_code == 200, "Erreur HTTP {c}".format(c=r.status_code)
            html = lxml.html.fromstring(r.content)

            return html

        def get_elements(etype,url):
            import json
            if 1:
                html =  get_html(url)
                elts = html.xpath('//article[contains(@class,"category-'+etype.lower()+'")]/a/@href')
                imgs = html.xpath('//article[contains(@class,"category-'+etype.lower()+'")]/a/div/img/@src')
                json_backup = []
                for i,elt_url in enumerate(elts):
                    html = get_html(elt_url)
                    title = html.xpath('//title/text()')[0].split(' -')[0]

                    nodes = html.xpath('//div[@class="elementor-widget-container"]/h2[not(@class)]/parent::*')
                    content = lxml.html.tostring(nodes[0], pretty_print=True, method="html")
                    elt_name = elt_url.split('/')[-2]
                    img = etype.lower()+'_'+elt_name+'.png'
                    txt_content = "\n".join(html.xpath('//div[@class="elementor-widget-container"]/h2[not(@class)]/parent::*//text()'))
                    epdata = dict(
                        id = self._id,
                        markdown =  '',  #markdownify.markdownify(content),
                        entity="externalpage",
                        title=title.strip(),
                        doctype=etype,
#                        html = content,
                        url = elt_url,
                        image = img,
                        content = txt_content)
                    json_backup.append(epdata)

                    ExternalPage(**epdata).save()
                    self._id += 1

                    with open(os.path.join(path,img),'wb') as f:
                        f.write(requests.get(imgs[i]).content)

                #print(json_backup)
                with open(os.path.join('core','data',etype+'.json'),'w') as f:
                    f.write(json.dumps(json_backup))
            else: #except:
                print("backup")
                with open(os.path.join('core','data',etype+'.json'),'r') as f:
                    json_backup = json.loads(f.read())
                for ep in json_backup:
                    ExternalPage(**ep).save()

        get_elements('Livret','https://melenchon2022.fr/livrets-thematiques/')
        get_elements('Plan','https://melenchon2022.fr/plans/')
