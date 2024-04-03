from typing import NoReturn

from data.script.database.database import Database


class Agent:
    username: str
    password: str

    def __init__(self, username: str, password: str) -> NoReturn:
        self.username = username
        self.password = password


class AgentCollection:
    agents: list

    def __init__(self):
        self.agents = []

    def append(self, agent: Agent) -> NoReturn:
        self.agents.append(agent)

    def add_to_db(self, database: Database) -> NoReturn:
        for agent in self.agents:
            database.execute_query(f"INSERT INTO agent (nom_utilisateur, mot_de_passe) VALUES ('{agent.username}', "
                                   f"'{agent.password}')")

    @staticmethod
    def clear_db(database: Database) -> NoReturn:
        database.execute_query("DELETE FROM agent WHERE TRUE")
