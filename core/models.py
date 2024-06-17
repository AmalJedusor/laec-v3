from django.db import models



class Part(models.Model):
    number = models.CharField(max_length=500, primary_key=True)
    slug = models.CharField(max_length=500)
    entity=models.CharField(max_length=500, default='')
    title = models.CharField(max_length=500)
    id =  models.IntegerField(default=1)
    content = models.TextField()
    main_title = models.CharField(max_length=500,default='')
    text =  models.TextField(default='')
    #newsetup
    forewords = models.TextField(default='')
    afterwords = models.TextField(default='')
    page =  models.IntegerField(default=1)
    shortlink = models.CharField(max_length=20,default='')

    class Meta:
        ordering = ('number',)

class NextPrevReferences(models.Model):
    entity=models.CharField(max_length=50, default='')
    id =  models.IntegerField(primary_key=True,default=1)

class Article(models.Model):
    number = models.IntegerField(primary_key=True)
    slug = models.CharField(max_length=500)
    entity=models.CharField(max_length=50, default='')
    title = models.CharField(max_length=500)
    part_number = models.CharField(max_length=10)
    id =  models.IntegerField(default=1)
    content = models.TextField()
    part = models.ForeignKey(Part, on_delete=models.DO_NOTHING,default='')    
    text =  models.TextField(default='')
    #new setup
    key = models.TextField(default='')
    measures = models.TextField(default='')
    asavoir = models.TextField(default='')
    forewords = models.TextField(default='')
    afterwords = models.TextField(default='')
    page =  models.IntegerField(default=0)
    shortlink = models.CharField(max_length=20,default='')

    class Meta:
        ordering = ('number',)


class UrlData(models.Model):
    url = models.CharField(max_length=200)
    slug = models.CharField(max_length=15)

    class Meta:
        ordering = ('slug',)

class Measure(models.Model):
    number = models.IntegerField(primary_key=True)
    section = models.ForeignKey(Article, on_delete=models.DO_NOTHING)
    text=models.TextField( default='')
    key = models.BooleanField(default=False)
    page =  models.IntegerField(default=0)
    shortlink = models.CharField(max_length=20,default='')

    class Meta:
        ordering = ('number',)



class ExternalPage(models.Model):
    id =  models.IntegerField(default=1)
    title = models.CharField(max_length=100,primary_key=True)
    content = models.TextField(default='')
    entity=models.CharField(max_length=500, default='')
    doctype= models.CharField(max_length=100, default='')
    image = models.CharField(max_length=100)
    html = models.TextField(default='')
    markdown = models.TextField(default='')
    url = models.CharField(max_length=200,default='')
    def __str__(self):
        return '{id}:{content}'.format(id=self.id,content=self.content)
