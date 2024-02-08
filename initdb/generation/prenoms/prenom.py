import json

# Chemin du fichier JSON
#json_path = r'C:/Users/loic/Desktop/Spacework/LA2/ProjetMobile/generation/prenoms/surnames.json'
json_path = r'C:/Users/loic/Desktop/Spacework/LA2/ProjetMobile/generation/prenoms/prenom2.json'

# Charger le contenu du fichier JSON
with open(json_path, 'r') as file:
    prenoms = json.load(file)

# Générer le script SQL
sql_script = "INSERT INTO temp_prenoms (prenom) VALUES\n"

for i, prenom in enumerate(prenoms):
    sql_script += f"('{prenom}')"
    if i < len(prenoms) - 1:
        sql_script += ",\n"
    else:
        sql_script += ";\n"

# Enregistrer le script SQL dans un fichier
#sql_file_path = 'insert_prenoms.sql'
sql_file_path = 'insert_prenoms_french.sql'
with open(sql_file_path, 'w') as sql_file:
    sql_file.write(sql_script)

print(f"Script SQL généré avec succès : {sql_file_path}")
