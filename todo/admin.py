from django.contrib import admin

from .models import *

# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'content', 'date', 'done')
    list_display_links = ('id','name', 'content')
    list_editable = ('done',)
    search_fields = ('id', 'name', 'content')
    list_filter = ('done', 'name')

admin.site.register(Todo, TodoAdmin)