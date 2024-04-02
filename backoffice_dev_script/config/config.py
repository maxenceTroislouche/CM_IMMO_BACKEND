import json
from pathlib import Path
from typing import NoReturn


class ConfigParser:
    config_path: Path

    def __init__(self, config_path: Path):
        self.config_path = config_path
        self.database_config = {}
        self.sftp_config = {}
        self.__parse()

    def __parse(self) -> NoReturn:
        with open(self.config_path, "r") as f:
            data = json.load(f)
            self.database_config = {
                "host": data["database"]["host"],
                "port": data["database"]["port"],
                "username": data["database"]["username"],
                "password": data["database"]["password"],
                "database": data["database"]["database"]
            }
            self.sftp_config = {}