from django.db import models

# Create your models here.


class Todo(models.Model):
    name = models.CharField(max_length = 50)
    content = models.CharField(max_length = 500, blank = True)
    date  = models.DateField(auto_now_add = True)
    done = models.BooleanField(default = False, null = True)

    def __str__(self):
        return self.name
