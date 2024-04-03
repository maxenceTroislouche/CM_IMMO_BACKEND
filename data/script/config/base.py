from abc import ABC, abstractmethod
from typing import NoReturn


class BaseConfigParser(ABC):
    db_host: str
    db_port: int
    db_user: str
    db_password: str
    db_name: str

    @abstractmethod
    def parse(self) -> NoReturn:
        pass
