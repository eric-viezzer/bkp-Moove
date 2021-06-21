import mysql.connector

class Mysql:
    def __init__(self, user, password, host, database):
        self.user = user
        self.password = password
        self.host = host
        self.database = database
        self.mysql = None
        self.cursor = None

    # Estabelecendo uma conexão
    def connect(self):
        try:
            self.mysql = mysql.connector.connect(
                user=self.user, password=self.password, host=self.host, database=self.database, auth_plugin='mysql_native_password')
            # Criando cursor para manipulação do banco.
            print(self.mysql)
            self.cursor = self.mysql.cursor()
        except Exception as err:
            print(err)
            raise

    # def selectUser(self, usuario):
    #     query = (
    #         "SELECT * FROM usuario where  = '%s'"
    #     )
    #     user = usuario
    #     try:
    #         self.cursor.execute(query, user)
    #         print(query)
    #         self.mysql.commit()
    #     except Exception as err:
    #         print('Usuario Invalido')
    #         print(err)
    #         self.mysql.rollback()
    #         self.close()

    def insertWind(self, data):
        query = (
            "INSERT INTO ohwLeituraWind (fkMaquina, disk_load, user_desktop, placa_mae, cpu_count, memory_load, memory_use, memory_available, video_card, cpu_name, cpu_clock, cpu_temperature, cpu_load, media_clock, media_temp)"
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        )
        values = data
        try:
            print('Inserindo Valores')
            self.cursor.execute(query, values)
            self.mysql.commit()
        except Exception as err:
            print(err)
            self.mysql.rollback()
            self.close()

    # Fechando conexão
    def close(self):
        self.mysql.close()
