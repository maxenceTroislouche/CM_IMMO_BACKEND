import json

# Chemin vers le fichier JSON
chemin_fichier = 'france.json'

# Chemin vers le fichier SQL de sortie
chemin_sql = 'insert.sql'

# Charger les données JSON depuis le fichier
with open(chemin_fichier, 'r', encoding='utf-8') as fichier:
    donnees_json = json.load(fichier)

# Ouvrir le fichier SQL en mode écriture
with open(chemin_sql, 'w', encoding='utf-8') as fichier_sql:

    # Générer les instructions SQL d'insertion
    for index, donnee in enumerate(donnees_json):
        code_postal = donnee.get('Code_postal', '')
        nom_commune = donnee.get('Nom_commune', '')

        # Écrire l'instruction SQL dans le fichier
        fichier_sql.write(f"INSERT INTO `ville` (`code_postal`, `nom`) VALUES ('{code_postal}', '{nom_commune}');\n")

# Afficher un message de confirmation
print(f"Les instructions SQL ont été enregistrées dans {chemin_sql}")
