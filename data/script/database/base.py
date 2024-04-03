from abc import ABC, abstractmethod
from pathlib import Path
from typing import NoReturn

from data.script.config.base import BaseConfigParser


class BaseSQLDatabase(ABC):
    """
    Base class to implement sql database interactions
    """
    def __init__(self, config_path: Path, config_parser_cls: BaseConfigParser.__class__) -> NoReturn:
        # -- Get config from config file
        config_parser = config_parser_cls(config_path)
        self.host = config_parser.db_host
        self.port = config_parser.db_port
        self.username = config_parser.db_user
        self.password = config_parser.db_password
        self.database = config_parser.db_name

        # -- Start connection
        self.__connect()

    @abstractmethod
    def __connect(self) -> NoReturn:
        pass

    @abstractmethod
    def __disconnect(self) -> NoReturn:
        pass

    @abstractmethod
    def execute_query(self, query: str) -> NoReturn:
        pass

    @abstractmethod
    def execute_select(self, query: str) -> list:
        pass

    def __del__(self) -> NoReturn:
        """
        Disconnects from the database when the database object is out of scope
        """
        self.__disconnect()
