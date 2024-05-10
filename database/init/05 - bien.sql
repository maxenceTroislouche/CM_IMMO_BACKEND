-- Insérer type tiers
INSERT INTO type_tiers (id, lib) VALUES (1, 'LOCATAIRE');
INSERT INTO type_tiers (id, lib) VALUES (2, 'PROPRIETAIRE');

-- Insérer ville
INSERT INTO ville (id, code_postal, nom) VALUES (1, '75001', 'Paris');
INSERT INTO ville (id, code_postal, nom) VALUES (2, '62300', 'Lens');

-- Insérer type bien
INSERT INTO type_bien (id, lib) VALUES (1, 'APPARTEMENT');
INSERT INTO type_bien (id, lib) VALUES (2, 'MAISON');

-- Insérer type chauffage
INSERT INTO type_chauffage (id, lib) VALUES (1, 'GAZ');
INSERT INTO type_chauffage (id, lib) VALUES (2, 'ELECTRIQUE');

-- Insérer type eau chaude
INSERT INTO type_eau_chaude (id, lib) VALUES (1, 'GAZ');
INSERT INTO type_eau_chaude (id, lib) VALUES (2, 'ELECTRIQUE');

-- Insérer tiers locataire
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (1, 1, 'Dupont', 'Jean', DATE('2000-01-01'), 'NUM SECU TEST', 'RIB TEST');

-- Insérer tiers propriétaire
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (2, 2, 'Troislouche', 'Maxence', DATE('2002-11-28'), 'NUM SECU TEST MAX', 'RIB TEST MAX');

-- Insérer photo
INSERT INTO photo (id, chemin) VALUES (1, 'nouveaux-batiments-espaces-verts.jpg');

-- Insérer bien
INSERT INTO bien (id, id_proprietaire, id_ville, id_type_bien, id_type_chauffage, id_type_eau_chaude, num_rue, nom_rue, longitude, latitude, etage, num_appartement, date_creation, classification_taille, surface_habitable, description, photos) 
VALUES (1, 2, 2, 1, 1, 1, 12, 'Rue Jean Souvraz', 2.8333, 50.4333, 1, 12, DATE('2024-05-08'), 'T1', 30, 'Appartement T1', array[1]);

-- Insérer baux
INSERT INTO bail (id, id_locataire, id_proprietaire, id_bien, date_debut, date_fin, nombre_cle)
VALUES (1, 1, 2, 1, DATE('2024-04-08'), DATE('2024-05-08'), 2);

-- Insérer etat des lieux
INSERT INTO etat_des_lieux (id, id_bail, id_agent, est_entrant, date_realisation, avancement)
VALUES (1, 1, 1, TRUE, DATE('2024-04-08'), 33);

-- Insérer type piece
INSERT INTO type_piece (id, lib) VALUES (1, 'LOGEMENT');

-- Insérer fonction piece
INSERT INTO fonction_piece (id, lib) VALUES (1, 'KOUISINE');

-- Insérer piece
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (1, 1, 1, 1, 1, 'Cuisine', 10);
