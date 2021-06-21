import psutil
import requests
from random import randint
import random

def getData():
    cpu_info = {
    'cpu': 0,
    'memory': 0,
    'disk': 0,
    'cpu_idle': 0
    }
    
    cpu = psutil.cpu_percent(interval=1, percpu=True)
    cpu_media = sum(cpu)/len(cpu)
    memory = (psutil.virtual_memory().used >> 30)
    memory_percent = (psutil.virtual_memory().percent)
    disk = psutil.disk_usage('/').percent
    cpu_idle = (psutil.cpu_times().idle / 3600)

    cpu_info['cpu'] = round(cpu_media,1)
    cpu_info['memory'] = memory
    cpu_info['memory_percent'] = memory_percent
    cpu_info['disk'] = disk
    cpu_info['cpu_idle'] = cpu_idle 
    maquina = random.randint(1,3)


    # Objeto para visualização só
    print(cpu_info)
    # lista para envio no banco
    data = (maquina, disk, memory_percent)

    return data
