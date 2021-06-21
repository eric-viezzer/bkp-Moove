from services.mysql import Mysql

import telebot
import urllib
import json
import pymysql
import time


conn = pymysql.connect(db='bdMoove', user='moove', passwd='moove123')
cursor = conn.cursor()

while True:
    cpu = cursor.execute("SELECT cpu_load FROM ohwLeituraWind ORDER BY id DESC LIMIT 1")
    cpu = str(cursor.fetchall()).replace("(", "").replace(")", "").replace(",", "").replace("'", "")

    mem = cursor.execute("SELECT memory_load FROM `DATASET_COMP` ORDER BY id DESC LIMIT 1")
    mem = str(cursor.fetchall()).replace("(", "").replace(")", "").replace(",", "").replace("'", "")

    disk = cursor.execute("SELECT disk FROM `DATASET_COMP` ORDER BY id DESC LIMIT 1")
    disk = str(cursor.fetchall()).replace("(", "").replace(")", "").replace(",", "").replace("'", "")

    TELEGRAM_TOKEN = "1406158609:AAFZIY_BCzMJG--PFAVBxhKEyNno9N83NyM"
    bot = telebot.TeleBot(TELEGRAM_TOKEN)

    @bot.message_handler(commands=['start'])
    def send_start_message(message):
        bot.reply_to(message, "Olá! Eu sou o sou MooveBot!. \n"
            "Envie comandos para que eu mostre como esta indo seu PC. \n"
            "Digite /help para conhecer os comandos.")

    @bot.message_handler(commands=['help'])
    def send_help_message(message):
        bot.reply_to(message, "/cpu => gera as informações da sua cpu. \n"
        "/memory => gera informações da sua memoria. \n"
        "/disk => gera informações de seu disco. ")
    
    @bot.message_handler(commands=['bye'])
    def send_help_message(message):
        bot.reply_to(message, "Tchau!")

    @bot.message_handler(commands=['memory'])
    def send_memory_message(message):
        bot.reply_to(message, str(mem) + "%")      
        
    @bot.message_handler(commands=['disk'])
    def send_disk_message(message):
        bot.reply_to(message, str(disk) + "%")

    @bot.message_handler(commands=['cpu'])
    def send_cpu_message(message):
        bot.reply_to(message, str(cpu) + "%")

    bot.polling()
    time.sleep(5)