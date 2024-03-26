# Nom du réseau externe
NETWORK_NAME := appmobile

# Commande par défaut lors de l'exécution de `make` sans arguments
all: network build up

# Créer le réseau externe s'il n'existe pas déjà
network:
	@if [ -z "$$(docker network ls --filter name=^${NETWORK_NAME}$$ -q)" ]; then \
		echo "Creating network ${NETWORK_NAME}"; \
		docker network create ${NETWORK_NAME}; \
	else \
		echo "Network ${NETWORK_NAME} already exists"; \
	fi

# Construire ou reconstruire les services
build:
	docker-compose -f $(COMPOSE_FILE) build

# Démarrer les services en arrière-plan
up:
	docker-compose -f $(COMPOSE_FILE) up -d

# Arrêter et supprimer les conteneurs, les réseaux, les volumes et les images créés par `up`
down:
	docker-compose -f $(COMPOSE_FILE) down

# Supprimer le réseau externe
remove-network:
	docker network rm ${NETWORK_NAME}

# Arrêter les services
stop:
	docker-compose -f $(COMPOSE_FILE) stop

# Supprimer les conteneurs arrêtés et les réseaux non utilisés (pas les volumes ni les images)
clean:
	docker-compose -f $(COMPOSE_FILE) rm -f
	docker network prune -f

# Afficher les journaux des services
logs:
	docker-compose -f $(COMPOSE_FILE) logs

.PHONY: all network build up down remove-network stop clean logs
