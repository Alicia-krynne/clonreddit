from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import LogoutView,LoginView

app_name = "appreddit"

urlpatterns=[
    path('',views.homepage,name='Homepage'),
    # path('search/',views.search_results,name='search_results'),
    # path('new/post',views.create_post, name='create_post'),
     
 ]

if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
# if settings.DEBUG:
#     urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)