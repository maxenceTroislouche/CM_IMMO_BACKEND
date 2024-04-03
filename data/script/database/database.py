from pathlib import Path
from typing import NoReturn

import psycopg2

from data.script.config.base import BaseConfigParser
from data.script.database.base import BaseSQLDatabase


class PostgresSQLDatabase(BaseSQLDatabase):
    """
    PostgreSQL database interactions
    """
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

    def __disconnect(self):
        self.conn.close()

    def __init__(self, config_path: Path, config_parser_cls: BaseConfigParser.__class__) -> NoReturn:
        self.conn = None
        self.config_path = config_path
        super().__init__(config_path, config_parser_cls)

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
        self.__disconnect()
