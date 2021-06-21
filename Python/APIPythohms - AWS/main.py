from services.mysql import Mysql
from services.pythohms import CrawlerOpenHardwareMonitor
import time
import platform

# Inserir user, password, host, database
mysql = Mysql('root', 'Moove123', '54.82.32.68', 'moove')

mysql.connect()

# maquina = int(input("Escolha uma maquina: "))
# usuario = str(input("Insira o nome de usuario: "))

while True:
    testeWind = CrawlerOpenHardwareMonitor()
    values = testeWind.getInfo()
    print(values)
    mysql.insertWind(values)
    time.sleep(5)
