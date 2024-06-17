from django.conf import settings
from haystack.backends.elasticsearch_backend import ElasticsearchSearchBackend
from haystack.backends.elasticsearch_backend import ElasticsearchSearchEngine
from haystack.fields import EdgeNgramField as BaseEdgeNgramField


# Custom Backend
class CustomElasticBackend(ElasticsearchSearchBackend):
    DEFAULT_ANALYZER = None
    def __init__(self, connection_alias, **connection_options):
        super(CustomElasticBackend, self).__init__(
                                connection_alias, **connection_options)
        user_settings = getattr(settings, 'ELASTICSEARCH_INDEX_SETTINGS', None)
        self.DEFAULT_ANALYZER = getattr(settings, 'ELASTICSEARCH_DEFAULT_ANALYZER', "snowball")
        if user_settings:
            setattr(self, 'DEFAULT_SETTINGS', user_settings)

    def build_schema(self, fields):
        content_field_name, mapping = super(CustomElasticBackend,
                                              self).build_schema(fields)

        for field_name, field_class in fields.items():
            field_mapping = mapping[field_class.index_fieldname]

            index_analyzer = getattr(field_class, 'index_analyzer', None)
            search_analyzer = getattr(field_class, 'search_analyzer', None)
            field_analyzer = getattr(field_class, 'analyzer', self.DEFAULT_ANALYZER)

            if field_mapping['type'] == 'string' and field_class.indexed:
                if not hasattr(field_class, 'facet_for') and not field_class.field_type in('ngram', 'edge_ngram'):
                    field_mapping['analyzer'] = field_analyzer

            if index_analyzer and search_analyzer:
                field_mapping['index_analyzer'] = index_analyzer
                field_mapping['search_analyzer'] = search_analyzer
                del(field_mapping['analyzer'])

            mapping.update({field_class.index_fieldname: field_mapping})
        return (content_field_name, mapping)


class CustomElasticSearchEngine(ElasticsearchSearchEngine):
    backend = CustomElasticBackend


# Custom field
class CustomFieldMixin(object):

    def __init__(self, **kwargs):
        self.analyzer = kwargs.pop('analyzer', None)
        self.index_analyzer = kwargs.pop('index_analyzer', None)
        self.search_analyzer = kwargs.pop('search_analyzer', None)
        super(CustomFieldMixin, self).__init__(**kwargs)


class CustomEdgeNgramField(CustomFieldMixin, BaseEdgeNgramField):
    pass



from haystack import indexes
from haystack.backends import elasticsearch_backend as es_backend


class AsciifoldingElasticBackend(es_backend.ElasticsearchSearchBackend):

    def __init__(self, *args, **kwargs):
        super(AsciifoldingElasticBackend, self).__init__(*args, **kwargs)
        analyzer = {
            "ascii_analyser" : {
                "tokenizer" : "standard",
                "filter" : ["standard", "asciifolding", "lowercase"]
            },
            "ngram_analyzer": {
                "type": "custom",
                "tokenizer": "lowercase",
                "filter": ["haystack_ngram", "asciifolding"]
            },
            "edgengram_analyzer": {
                "type": "custom",
                "tokenizer": "lowercase",
                "filter": ["haystack_edgengram", "asciifolding"]
            }
        }
        self.DEFAULT_SETTINGS['settings']['analysis']['analyzer'] = analyzer

        user_settings = getattr(settings, 'ELASTICSEARCH_INDEX_SETTINGS', None)
        #self.DEFAULT_ANALYZER = getattr(settings, 'ELASTICSEARCH_DEFAULT_ANALYZER', "snowball")
        if user_settings:
            setattr(self, 'DEFAULT_SETTINGS', user_settings)


    def build_schema(self, fields):
        content_field_name, mapping = super(AsciifoldingElasticBackend,
                                            self).build_schema(fields)

        for field_name, field_class in fields.items():
            field_mapping = mapping[field_class.index_fieldname]

            if field_mapping['type'] == 'string' and field_class.indexed:
                if not hasattr(field_class, 'facet_for') and not field_class.field_type in('ngram', 'edge_ngram'):
                    field_mapping['analyzer'] = "ascii_analyser"

            mapping.update({field_class.index_fieldname: field_mapping})
        return (content_field_name, mapping)


class AsciifoldingElasticSearchEngine(es_backend.ElasticsearchSearchEngine):
    backend = AsciifoldingElasticBackend
