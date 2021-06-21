import requests
import json
from random import randint
import random
import psutil

class CrawlerOpenHardwareMonitor:
    maquina = 0

    

    def __init__(self):
        #192.168.0.33:9000
        self.url = 'http://192.168.0.29:9000/data.json'
        self.data = None
    
    def getJsonData(self):
        response = requests.get(self.url)
        data = json_data = response.json()
        self.data = data
    
    def getInfo(self):
        self.getJsonData()
        info = {
            "Desktop": None,
            "MotherBoard": None,
            "CPU": [],
            "Memory": {
                "Load": None,
                "Use": None,
                'Available': None
            },
            "VideoCard": None,
            "AllDevices": []
        }

        clocks = []
        temperatures = []
        loads = []
        
        data = self.data

        for i in data['Children']:
            info['Desktop'] = i['Text']
            for desktop in i['Children']:
                if desktop['id'] <= 2:
                    info['MotherBoard'] = desktop['Text']
                if desktop['Text'].find('Generic Hard Disk') < 0:
                    info['AllDevices'].append(desktop['Text'])
                #CPU
                if desktop['Text'].find('Intel') >= 0 or desktop['Text'].find('AMD') >= 0:
                    for cpu_metrics in desktop['Children']:
                        #clock
                        if cpu_metrics['Text'] == 'Clocks':
                            for clock in cpu_metrics['Children']:
                                if clock['Text'].find('CPU') >= 0:
                                    clocks.append(clock['Value'])
                        #temperature
                        if cpu_metrics['Text'] == 'Temperatures':
                            for temps in cpu_metrics['Children']:
                                if temps['Text'].find('CPU') >= 0:
                                    temperatures.append(temps['Value'])
                        #load
                        if cpu_metrics['Text'] == 'Load':
                            for load in cpu_metrics['Children']:
                                if load['Text'].find('CPU') >= 0:
                                    loads.append(load['Value'])
                #Memory
                if desktop['Text'].find('Generic Memory') >= 0 or desktop['Text'].find('Memory') >= 0:
                    for cpu_metrics in desktop['Children']:
                        #Load
                        if cpu_metrics['Text'] == 'Load':
                            for memory in cpu_metrics['Children']:
                                if memory['Text'] == 'Memory':
                                    info['Memory']['Load'] = memory['Value']
                        #Use
                        if cpu_metrics['Text'] == 'Data':
                            for memory in cpu_metrics['Children']:
                                if memory['Text'] == 'Used Memory':
                                    info['Memory']['Use'] = memory['Value']
                                if memory['Text'] == 'Available Memory':
                                    info['Memory']['Available'] = memory['Value']

            for index, itens in enumerate(clocks):
                if index >= len(temperatures):
                    temp = temperatures[0]
                else:
                    temp = temperatures[index]
                cpu = {
                    'Name': f'Core {index + 1}',
                    "Clock": clocks[index],
                    "Temperature": temp,
                    "Load": loads[index]
                }
                info['CPU'].append(cpu)
            # return info

        user_desktop = info["Desktop"]
        placa_mae = info["MotherBoard"]
        cpu_count = len(info["CPU"]) 
        memory_load = info["Memory"]["Load"]
        memory_use = info["Memory"]["Use"]
        memory_available = info["Memory"]["Available"]
        video_card = info["VideoCard"]
        soma_temp = 0.0
        soma_clock = 0.0

        for i in info["CPU"]:
            cpu_name = len(i["Name"])
            cpu_clock = float(i["Clock"].replace("MHz","").replace(",","."))
            cpu_temperature = float(i["Temperature"].replace("°C","").replace(",","."))
            cpu_load = i["Load"]
            soma_clock += cpu_clock
            soma_temp += cpu_temperature
            media_clock = round((soma_clock / cpu_count),2)
            media_temp =  round((soma_temp / cpu_count),2)
            
        disk_load = psutil.disk_usage('/').percent
        maquina = random.randint(1,3)
 

        data = ( maquina, disk_load, user_desktop, placa_mae, cpu_count,
         memory_load.replace("%","").replace(",","."), 
         memory_use.replace("GB","").replace(",","."), 
         memory_available.replace("GB","").replace(",","."), 
         video_card, cpu_name, cpu_clock, cpu_temperature, cpu_load.replace(",",".").replace("%",""), media_clock, media_temp)
        return data
        

if __name__ == "__main__":
    testeWind = CrawlerOpenHardwareMonitor()
    testeWind.getInfo()
