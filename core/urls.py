from django.urls import path, re_path
from django.conf.urls import url
from core import views
#from .views import MySearchView
from haystack.generic_views import SearchView

handler404 = 'core.views.error_404'

from django.views.generic.base import RedirectView
favicon_view = RedirectView.as_view(url='/static/img/favicon.ico', permanent=True)
robots_view = RedirectView.as_view(url='/static/robots.txt', permanent=True)


urlpatterns = [
    path('', views.home),
    path('sommaire', views.toc),
    path('chapitre/<slug:n>/<slug:slug>', views.chapter),
    path('section/<slug:n>/<slug:slug>', views.section),
    path('partie/<slug:n>/<slug:slug>', views.part),
    path('hasard', views.random),
    path('fin/', views.fin),
    path('page/mentions-legales', views.mentions),
    path('recherche/', views.recherche),
    path('c<n>/',views.redirect_short),
    re_path(r'^favicon\.ico$', favicon_view),
    re_path(r'^robots\.txt$', robots_view),
    re_path(r'^s(?P<n>[0-9]{1,2})/$',views.redirect_short),
    re_path(r'^s(?P<n>[0-9]{1,2})m(?P<m>[0-9]{1,3})/$',views.redirect_short_measure),
    path('c<slug:n>/',views.redirect_short_cp),
    path('p<slug:n>/',views.redirect_short_cp),
    path('visuel/<slug:v>', views.visuel),
    path('visuels',views.visuels),
    path('visuels/<int:p>',views.visuels),
    path('visuels/<int:p>/<int:gp>',views.visuels),
    path('livrets-et-plans',views.livrets_plans),
    path('404',views.error_404),

]
