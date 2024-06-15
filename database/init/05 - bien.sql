-- Insérer type tiers
INSERT INTO type_tiers (id, lib) VALUES (1, 'LOCATAIRE');
INSERT INTO type_tiers (id, lib) VALUES (2, 'PROPRIETAIRE');

-- Insérer ville
INSERT INTO ville (id, code_postal, nom) VALUES (1, '75001', 'Paris');
INSERT INTO ville (id, code_postal, nom) VALUES (2, '62300', 'Lens');
INSERT INTO ville (id, code_postal, nom) VALUES (3, '59000', 'Lille');
INSERT INTO ville (id, code_postal, nom) VALUES (4, '62000', 'Arras');

-- Insérer type bien
INSERT INTO type_bien (id, lib) VALUES (1, 'APPARTEMENT');
INSERT INTO type_bien (id, lib) VALUES (2, 'MAISON');
INSERT INTO type_bien (id, lib) VALUES (3, 'STUDIO');

-- Insérer type chauffage
INSERT INTO type_chauffage (id, lib) VALUES (1, 'GAZ');
INSERT INTO type_chauffage (id, lib) VALUES (2, 'ELECTRIQUE');

-- Insérer type eau chaude
INSERT INTO type_eau_chaude (id, lib) VALUES (1, 'GAZ');
INSERT INTO type_eau_chaude (id, lib) VALUES (2, 'ELECTRIQUE');

-- Insérer tiers locataire
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (1, 1, 'Dupont', 'Jean', DATE('2000-01-01'), 'NUM SECU TEST', 'RIB TEST');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (2, 1, 'Connu', 'Alain', DATE('1975-04-01'), 'NUM SECU TEST', 'RIB TEST');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (3, 1, 'Nyme', 'Jeannot', DATE('1987-05-05'), 'NUM SECU TEST', 'RIB TEST');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (4, 1, 'Stere', 'Remi', DATE('1996-07-02'), 'NUM SECU TEST', 'RIB TEST');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (5, 1, 'Maison', 'Emma', DATE('1990-07-07'), 'NUM SECU TEST', 'RIB TEST');


-- Insérer tiers propriétaire
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (6, 2, 'Troislouche', 'Maxence', DATE('2002-11-28'), 'NUM SECU TEST MAX', 'RIB TEST MAX');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (7, 2, 'Petitprez', 'Loic', DATE('2000-05-04'), 'NUM SECU TEST MAX', 'RIB TEST MAX');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (8, 2, 'Taffin', 'Florian', DATE('2002-09-26'), 'NUM SECU TEST MAX', 'RIB TEST MAX');
INSERT INTO tiers (id, id_type_tiers, nom, prenom, date_de_naissance, numero_securite_sociale, rib) VALUES (9, 2, 'Boone', 'Timothe', DATE('2003-11-03'), 'NUM SECU TEST MAX', 'RIB TEST MAX');


-- Insérer photo
INSERT INTO photo (id, chemin) VALUES (1, 'nouveaux-batiments-espaces-verts.jpg');
<<<<<<< HEAD
INSERT INTO photo (id, chemin) VALUES (2, 'chambre-contemporaine-dans-un-appartement-en-noir-et-.jpg');
INSERT INTO photo (id, chemin) VALUES (3, 'd13b8acc1444302ecc2d2563850b3af9.jpg');
INSERT INTO photo (id, chemin) VALUES (4, 'chambre-appartement-t3.jpg');
INSERT INTO photo (id, chemin) VALUES (5, 'Nos-astuces-pour-amenager-une-tres-petite-chambre.jpg');
INSERT INTO photo (id, chemin) VALUES (6, 'salle-a-manger-dans-un-appartement-haussmannien-.jpg');
INSERT INTO photo (id, chemin) VALUES (7, 'salle-a-manger-deco.jpg');
INSERT INTO photo (id, chemin) VALUES (8, '3bd2ae7b24956629965d2a46681d66ee42b2a2e0.jpeg');
INSERT INTO photo (id, chemin) VALUES (9, 'home-staging-d-une-cuisine-ouverte-dans-un-appartement.jpg');
INSERT INTO photo (id, chemin) VALUES (10, '2.webp');
INSERT INTO photo (id, chemin) VALUES (11, 'b3f94c_c40486e492554981941e68953777c448~mv2.webp');
INSERT INTO photo (id, chemin) VALUES (12, 'petite-cuisine-moderne-appartement.jpg');
INSERT INTO photo (id, chemin) VALUES (13, 'salle-de-bain-renovation-appartement-1.jpg');
INSERT INTO photo (id, chemin) VALUES (14, 'une-salle-de-bain-renovee-jpg-1024x866.webp');
INSERT INTO photo (id, chemin) VALUES (15, 'rénovation-salle-de-bain-appartement-toulouse-2.jpg');
INSERT INTO photo (id, chemin) VALUES (16, 'idee-amenagement-petite-salle-de-bain.jpg');
INSERT INTO photo (id, chemin) VALUES (17, 'appartement-S-11-salle-de-bain.jpg');
INSERT INTO photo (id, chemin) VALUES (18, 'avant-travaux-les-wc-sommaires-de-lappartement_6098438.jpeg');
INSERT INTO photo (id, chemin) VALUES (19, 'entrepot-range-garage.png');
INSERT INTO photo (id, chemin) VALUES (20, 'salle-de-bain-moderne-blanche-avec-douche-italienne-649d32f61888a.jpg');
INSERT INTO photo (id, chemin) VALUES (21, 'salle-a-manger-chaises-eames-construction-maison-cami.webp');
INSERT INTO photo (id, chemin) VALUES (22, 'table-bois-metal-ameublier.jpg');
INSERT INTO photo (id, chemin) VALUES (23, 'Une-cuisine-campagne-chic-blanche.jpg');
INSERT INTO photo (id, chemin) VALUES (24, 'home-design.jpg');
INSERT INTO photo (id, chemin) VALUES (25, 'le-salon-art-deco-d-un-studio-parisien-renove_5456900.jpeg');
INSERT INTO photo (id, chemin) VALUES (26, 'ST1.jpg');

-- Bug de con : postgresql perd le compte des id ...
SELECT setval('photo_id_seq', (SELECT MAX(id) FROM photo));

-- Insérer bien
INSERT INTO bien (id, id_proprietaire, id_ville, id_type_bien, id_type_chauffage, id_type_eau_chaude, num_rue, nom_rue, longitude, latitude, etage, num_appartement, date_creation, classification_taille, surface_habitable, description, photos) 
VALUES (1, 8, 2, 1, 1, 1, 12, 'Rue Jean Souvraz', 2.8333, 50.4333, 1, 12, DATE('2024-05-08'), 'T1', 30, 'Appartement T1', array[1]);
INSERT INTO bien (id, id_proprietaire, id_ville, id_type_bien, id_type_chauffage, id_type_eau_chaude, num_rue, nom_rue, longitude, latitude, etage, num_appartement, date_creation, classification_taille, surface_habitable, description, photos) 
VALUES (2, 7, 3, 3, 1, 1, 6, 'Rue Gustave Delory', 3.0674, 50.6333, 9, 6, DATE('2022-05-04'), 'T2', 31, 'Appartement T2 - Centre de Lille, vue incroyable', array[3,13,20,8]);
INSERT INTO bien (id, id_proprietaire, id_ville, id_type_bien, id_type_chauffage, id_type_eau_chaude, num_rue, nom_rue, longitude, latitude, etage, num_appartement, date_creation, classification_taille, surface_habitable, description, photos) 
VALUES (3, 6, 2, 2, 2, 2, 18, 'Rue Jean Jaurès', 2.8321, 50.4292, 1, 6, DATE('2023-07-17'), 'T3', 80, 'Maison ', array[4,14,21,9]);
INSERT INTO bien (id, id_proprietaire, id_ville, id_type_bien, id_type_chauffage, id_type_eau_chaude, num_rue, nom_rue, longitude, latitude, etage, num_appartement, date_creation, classification_taille, surface_habitable, description, photos) 
VALUES (4, 9, 4, 2, 2, 2, 18, 'Rue Maximilien Robespierre', 2.7728, 50.2907, 1, 6, DATE('2019-10-15'), 'T3', 80, 'Maison ', array[5,15,22,10]);
INSERT INTO bien (id, id_proprietaire, id_ville, id_type_bien, id_type_chauffage, id_type_eau_chaude, num_rue, nom_rue, longitude, latitude, etage, num_appartement, date_creation, classification_taille, surface_habitable, description, photos) 
VALUES (5, 8, 2, 1, 1, 1, 18, 'Rue Jean Jaurès', 2.8309, 50.4291, 1, 6, DATE('2024-01-10'), 'T1', 25, 'Appartement T1 ', array[6,16,23,2]);


-- Insérer baux
INSERT INTO bail (id, id_locataire, id_proprietaire, id_bien, date_debut, date_fin, nombre_cle)
VALUES (1, 1, 8, 1, DATE('2024-04-08'), DATE('2024-05-08'), 2);

INSERT INTO bail (id, id_locataire, id_proprietaire, id_bien, date_debut, date_fin, nombre_cle)
VALUES (2, 2, 8, 5, DATE('2024-01-11'), DATE('2024-12-12'), 2);

-- Insérer etat des lieux
INSERT INTO etat_des_lieux (id, id_bail, id_agent, est_entrant, date_realisation, avancement)
VALUES (1, 1, 1, TRUE, DATE('2024-04-08'), 33);
INSERT INTO etat_des_lieux (id, id_bail, id_agent, est_entrant, date_realisation, avancement)
VALUES (2, 2, 1, TRUE, DATE('2024-01-11'), 1);

-- Insérer type piece
INSERT INTO type_piece (id, lib) VALUES (1, 'LOGEMENT');
INSERT INTO type_piece (id, lib) VALUES (2, 'ANNEXE');

-- Insérer fonction piece
INSERT INTO fonction_piece (id, lib) VALUES (1, 'CHAMBRE');
INSERT INTO fonction_piece (id, lib) VALUES (2, 'CUISINE');
INSERT INTO fonction_piece (id, lib) VALUES (3, 'SALLE A MANGER');
INSERT INTO fonction_piece (id, lib) VALUES (4, 'SALLE DE BAIN');
INSERT INTO fonction_piece (id, lib) VALUES (5, 'TOILETTE');
INSERT INTO fonction_piece (id, lib) VALUES (6, 'SALON');
INSERT INTO fonction_piece (id, lib) VALUES (7, 'BALCON');
INSERT INTO fonction_piece (id, lib) VALUES (8, 'GARAGE');
INSERT INTO fonction_piece (id, lib) VALUES (9, 'COULOIR');
INSERT INTO fonction_piece (id, lib) VALUES (10, 'AUTRE');


-- Insérer piece
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (1, 1, 1, 1, 1, 'Chambre', 10);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (2, 1, 1, 2, 2, 'Cuisine', 5);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (3, 1, 1, 3, 3, 'Salle à manger', 10);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (4, 1, 1, 4, 4, 'Salle de bain', 5);

INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (5, 2, 1, 6, 1, 'Salon et chambre', 20);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (6, 2, 1, 2, 2, 'Cuisine', 6);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (7, 2, 1, 4, 3, 'Salle de bain et toilette', 5);

INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (8, 3, 1, 1, 1, 'Chambre', 20);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (9, 3, 1, 2, 2, 'Cuisine', 15);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (10, 3, 1, 3, 3, 'Salle à manger', 30);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (11, 3, 1, 4, 4, 'Salle de bain', 15);

INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (12, 4, 1, 1, 1, 'Chambre', 20);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (13, 4, 1, 2, 2, 'Cuisine', 15);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (14, 4, 1, 3, 3, 'Salle à manger', 30);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (15, 4, 1, 4, 4, 'Salle de bain', 15);

INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (16, 5, 1, 6, 1, 'Salon', 10);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (17, 5, 1, 1, 2, 'Chambre', 5);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (18, 5, 1, 2, 3, 'Cuisine', 5);
INSERT INTO piece (id, id_bien, id_type_piece, id_fonction_piece, numero, description, surface)
VALUES (19, 5, 1, 4, 4, 'Salle de bain et toilette', 5);

-- Insérer des type d'éléments
INSERT INTO type_element (id, lib, data_obligatoire) VALUES (1, 'lit', null);
INSERT INTO type_element (id, lib, data_obligatoire) VALUES (2, 'canapé', null);

-- Insérer des éléments
INSERT INTO element (id, id_element_parent, id_type_element, id_piece, numero, description) 
VALUES (1, null, 1, 1, 1, '{"description": "Lit kingsize pour bien dormir"}');

INSERT INTO element (id, id_element_parent, id_type_element, id_piece, numero, description)
VALUES (2, null, 2, 2, 2, '{"description": "Canapé dans la cuisine (et pourquoi pas)"}');

-- Insérer des minutes
INSERT INTO minute (id_edl, id_element, photos, remarque, note)
VALUES (1, 1, array[]::integer[], '', -1);

INSERT INTO minute (id_edl, id_element, photos, remarque, note)
VALUES (1, 2, array[]::integer[], '', -1);
