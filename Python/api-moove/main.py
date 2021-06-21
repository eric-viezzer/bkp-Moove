from services.mysql import Mysql
from services.dataGenerator import getData

#import telebot
import urllib
import json
import time


#TELEGRAM_TOKEN = "1406158609:AAFZIY_BCzMJG--PFAVBxhKEyNno9N83NyM";

#bot = telebot.TeleBot(TELEGRAM_TOKEN)


#Inserir user, password, host, database

# Conexão Arthur
# Conexão Anna
# Conexão Eric
#mysql = Mysql('Moove','Moove123', 'localhost', 'moove')

# Conexão Guilherme
mysql = Mysql('moove','moove123', 'localhost', 'bdMoove')

# Conexão Rodrigo
#mysql = Mysql('moove','bandtec', 'localhost', 'moove')
# Conexão Theodoro



mysql.connect()

while True:
    values = getData()
    mysql.insert(values)
    time.sleep(5)