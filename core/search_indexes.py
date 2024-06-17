import datetime
from haystack import indexes
from .models import Article, UrlData, ExternalPage
from .search_backends import CustomEdgeNgramField


class ArticleIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.EdgeNgramField(document=True, use_template=True)
    content = indexes.CharField(model_attr='content')
    number = indexes.CharField(model_attr='number')
    part_number = indexes.CharField(model_attr='part_number')
    slug = indexes.CharField(model_attr='slug')
    title = indexes.CharField(model_attr='title')
    entity = indexes.CharField(model_attr='entity')
    id = indexes.IntegerField(model_attr='id')
      # We add this for autocomplete.
    content_auto =  indexes.EdgeNgramField(model_attr='content')
    title_auto = indexes.EdgeNgramField(model_attr='title')


    def get_model(self):
        return Article

    def index_queryset(self, using=None):
        return self.get_model().objects.all()

class ExternalPageIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.EdgeNgramField(document=True, use_template=True)
    content = indexes.CharField(model_attr='content')
    title = indexes.CharField(model_attr='title')
    url = indexes.CharField(model_attr='url')
    id = indexes.IntegerField(model_attr='id')
    image = indexes.CharField(model_attr='image')
    entity = indexes.CharField(model_attr='entity')
    doctype = indexes.CharField(model_attr='doctype')
      # We add this for autocomplete.
    content_auto =  indexes.EdgeNgramField(model_attr='content')
    title_auto = indexes.EdgeNgramField(model_attr='title')


    def get_model(self):
        return ExternalPage

    def index_queryset(self, using=None):
        return self.get_model().objects.all()
