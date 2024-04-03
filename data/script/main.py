from pathlib import Path
from typing import NoReturn

from data.script.config.config import ConfigParser
from data.script.database.base import BaseSQLDatabase
from data.script.database.database import PostgresSQLDatabase
from data.script.models.agent import AgentCollection, Agent


def create_agents(database: BaseSQLDatabase) -> NoReturn:
    agent_collection = AgentCollection()
    agent_collection.clear_db(database)
    agent_collection.append(Agent(username="Tim", password="premier_mot_de_passe"))
    agent_collection.append(Agent(username="Loïc", password="deuxième_mot_de_passe"))
    agent_collection.append(Agent(username="Florian", password="flovh"))
    agent_collection.append(Agent(username="Maxence", password="jaime_la_cuisine_du_kentucky"))
    agent_collection.add_to_db(database)


def main():
    config_file = Path("./config.json")
    database = PostgresSQLDatabase(config_file, ConfigParser)
    create_agents(database)


if __name__ == "__main__":
    main()
