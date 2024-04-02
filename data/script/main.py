from pathlib import Path
from typing import NoReturn

from backoffice_dev_script.database.database import Database
from backoffice_dev_script.models.agent import AgentCollection, Agent


def create_agents(database: Database) -> NoReturn:
    agent_collection = AgentCollection()
    agent_collection.clear_db(database)
    agent_collection.append(Agent(username="Tim", password="premier_mot_de_passe"))
    agent_collection.append(Agent(username="Loïc", password="deuxième_mot_de_passe"))
    agent_collection.append(Agent(username="Florian", password="flovh"))
    agent_collection.append(Agent(username="Maxence", password="jaime_la_cuisine_du_kentucky"))
    agent_collection.add_to_db(database)


def main():
    config_file = Path("./config.json")
    database = Database(config_file)
    create_agents(database)


if __name__ == "__main__":
    main()
