# Backend d'Immotep

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé Docker et Docker Compose sur votre machine. Ces outils sont nécessaires pour construire et exécuter les services définis dans ce projet. Vous pouvez les télécharger et les installer à partir du site officiel de [Docker](https://www.docker.com/get-started).

## Configuration initiale

### Création d'un réseau Docker

Avant de lancer l'application, vous devez créer un réseau Docker externe. Ce réseau permettra aux conteneurs de communiquer entre eux. Pour créer le réseau, exécutez la commande suivante dans votre terminal :

```bash
docker network create immotep-network
```

Cette étape n'est requise qu'une seule fois. Si le réseau `appmobile` existe déjà, Docker ignorera simplement la commande sans afficher d'erreur.
Cela n'est plus dans le Makefile à cause de Windaub qui n'accepte pas les if.

## Utilisation du Makefile

Une fois le réseau Docker en place, vous pouvez utiliser le Makefile pour faciliter le processus de construction, de lancement, et de gestion de votre application. Voici les commandes disponibles :

- **Construire ou reconstruire les services :** `make build`
- **Démarrer les services en arrière-plan :** `make up`
- **Arrêter et supprimer les conteneurs, les réseaux, les volumes, et les images créés :** `make down`
- **Supprimer le réseau externe (si vous souhaitez le recréer ou ne plus l'utiliser) :** `make remove-network`
- **Arrêter les services :** `make stop`
- **Supprimer les conteneurs arrêtés et les réseaux non utilisés :** `make clean`
- **Afficher les journaux des services :** `make logs`
