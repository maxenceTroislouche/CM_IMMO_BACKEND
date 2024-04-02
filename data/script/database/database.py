from pathlib import Path
from typing import NoReturn

import psycopg2

from backoffice_dev_script.config.config import ConfigParser


class Database:
    config_path: Path
    host: str
    port: int
    database: str
    username: str
    password: str

    def __connect(self):
        return psycopg2.connect(database=self.database,
                                host=self.host,
                                port=self.port,
                                user=self.username,
                                password=self.password)

    def __close_connection(self):
        self.conn.close()

    def __init__(self, config_path: Path) -> NoReturn:
        self.config_path = config_path
        config_parser = ConfigParser(config_path)
        self.host = config_parser.database_config.get("host")
        self.port = config_parser.database_config.get("port")
        self.username = config_parser.database_config.get("username")
        self.password = config_parser.database_config.get("password")
        self.database = config_parser.database_config.get("database")
        self.conn = self.__connect()

    def execute_query(self, query: str) -> NoReturn:
        cursor = self.conn.cursor()
        cursor.execute(query)
        self.conn.commit()
        cursor.close()

    def execute_select(self, query: str) -> list:
        cursor = self.conn.cursor()
        cursor.execute(query)
        self.conn.commit()
        rows = cursor.fetchall()
        cursor.close()

        return rows

    def __del__(self):
        self.__close_connection()
