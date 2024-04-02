# Nom du réseau externe
NETWORK_NAME := immotep-network

# Commande par défaut lors de l'exécution de `make` sans arguments
all: build up

# Construire ou reconstruire les services
build:
	docker-compose build

# Démarrer les services en arrière-plan
up:
	docker-compose up -d

# Arrêter et supprimer les conteneurs, les réseaux, les volumes et les images créés par `up`
down:
	docker-compose down

# Supprimer le réseau externe
remove-network:
	docker network rm ${NETWORK_NAME}

# Arrêter les services
stop:
	docker-compose stop

# Supprimer les conteneurs arrêtés et les réseaux non utilisés (pas les volumes ni les images)
clean:
	docker-compose down -v
	docker network prune -f

# Afficher les journaux des services
logs:
	docker-compose logs
