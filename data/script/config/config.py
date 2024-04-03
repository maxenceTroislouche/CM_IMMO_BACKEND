import json
from pathlib import Path
from typing import NoReturn

from data.script.config.base import BaseConfigParser


class ConfigParser(BaseConfigParser):
    config_path: Path

    def __init__(self, config_path: Path):
        self.config_path = config_path
        self.parse()

    def parse(self) -> NoReturn:
        with open(self.config_path, "r") as f:
            data = json.load(f)
            self.db_host = data["database"]["host"]
            self.db_port = data["database"]["port"]
            self.db_user = data["database"]["username"]
            self.db_password = data["database"]["password"]
            self.db_name = data["database"]["database"]
