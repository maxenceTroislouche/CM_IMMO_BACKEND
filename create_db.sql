/* Initiates the db with tables and the relationships between them */

/* Creates the database */
CREATE DATABASE CM_IMMO_DB;
USE CM_IMMO_DB;

CREATE TABLE ville (
    id INT NOT NULL AUTO_INCREMENT,
    code_postal VARCHAR(20) NOT NULL,
    nom VARCHAR(100) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE type_bien (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE type_piece (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE categorie_piece (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE photo (
    id INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(200) NOT NULL,

    PRIMARY KEY (id)
);

/* Creates Tiers table */
CREATE TABLE tiers (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    date_de_naissance DATE NOT NULL,
    numero_securite_sociale INT NOT NULL,
    rib INT NOT NULL,

    PRIMARY KEY (id) 
);

/* Creates bien table */
CREATE TABLE bien (
    id INT NOT NULL AUTO_INCREMENT,
    num_rue INT NOT NULL,
    nom_rue VARCHAR(100) NOT NULL,
    id_ville INT NOT NULL,
    id_type_bien INT NOT NULL,
    etage INT,
    num_appartement INT,
    date_creation DATE NOT NULL,
    classification_taille VARCHAR(50) NOT NULL,
    surface_habitable INT NOT NULL,
    type_chauffage VARCHAR(50) NOT NULL,
    num_version INT NOT NULL,

    PRIMARY KEY (id)
);

/* Creates piece table */
CREATE TABLE piece (
    id INT NOT NULL AUTO_INCREMENT,
    id_bien INT NOT NULL,
    numero INT NOT NULL,
    description VARCHAR(200) NOT NULL,
    id_type_piece INT NOT NULL,
    id_categorie_piece INT NOT NULL,
    surface VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

/* Creates bail table */
CREATE TABLE bail (
    id INT NOT NULL AUTO_INCREMENT,
    id_bien INT NOT NULL,
    id_locataire INT NOT NULL,
    id_proprietaire INT NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE type_minute (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE minute (
    id INT NOT NULL AUTO_INCREMENT,
    id_piece INT NOT NULL,
    id_type_minute INT NOT NULL,
    ordre INT NOT NULL,
    description VARCHAR(500) NOT NULL,
    
    PRIMARY KEY (id)
);
/* TODO Vérifier qu'il ne manque pas d'attributs dans minute */

CREATE TABLE affectation_minute_a_minute (
    id_minute INT NOT NULL,
    id_container INT NOT NULL,

    PRIMARY KEY (id_minute, id_container)
);

CREATE TABLE etat_des_lieux (
    id INT NOT NULL AUTO_INCREMENT,
    id_bail INT NOT NULL,
    est_entrant BOOLEAN NOT NULL,
    date_realisation DATE NOT NULL,
    est_fini BOOLEAN NOT NULL,

    PRIMARY KEY (id),
    UNIQUE (id_bail, est_entrant)
);

CREATE TABLE affectation_edl_min (
    id_edl INT NOT NULL,
    id_minute INT NOT NULL,
    note INT NOT NULL,
    remarques VARCHAR(300) NOT NULL,

    PRIMARY KEY (id_edl, id_minute)
);

CREATE TABLE affectation_photo_edl_min (
    id_edl INT NOT NULL,
    id_minute INT NOT NULL,
    id_photo INT NOT NULL,

    PRIMARY KEY (id_edl, id_minute, id_photo)
);

/* Ajout des clés étrangères */
ALTER TABLE bien
ADD FOREIGN KEY (id_ville) REFERENCES ville(id);
ALTER TABLE bien
ADD FOREIGN KEY (id_type_bien) REFERENCES type_bien(id);

ALTER TABLE piece
ADD FOREIGN KEY (id_bien) REFERENCES bien(id);
ALTER TABLE piece
ADD FOREIGN KEY (id_type_piece) REFERENCES type_piece(id);
ALTER TABLE piece
ADD FOREIGN KEY (id_categorie_piece) REFERENCES categorie_piece(id);

ALTER TABLE bail
ADD FOREIGN KEY (id_bien) REFERENCES bien(id);
ALTER TABLE bail
ADD FOREIGN KEY (id_locataire) REFERENCES tiers(id);
ALTER TABLE bail
ADD FOREIGN KEY (id_proprietaire) REFERENCES tiers(id);

ALTER TABLE minute
ADD FOREIGN KEY (id_piece) REFERENCES piece(id);
ALTER TABLE minute
ADD FOREIGN KEY (id_type_minute) REFERENCES type_minute(id);

ALTER TABLE affectation_minute_a_minute
ADD FOREIGN KEY (id_minute) REFERENCES minute(id);
ALTER TABLE affectation_minute_a_minute
ADD FOREIGN KEY (id_container) REFERENCES minute(id);

ALTER TABLE etat_des_lieux
ADD FOREIGN KEY (id_bail) REFERENCES bail(id);

ALTER TABLE affectation_edl_min
ADD FOREIGN KEY (id_edl) REFERENCES etat_des_lieux(id);
ALTER TABLE affectation_edl_min
ADD FOREIGN KEY (id_minute) REFERENCES minute(id);

ALTER TABLE affectation_photo_edl_min
ADD FOREIGN KEY (id_edl) REFERENCES etat_des_lieux(id);
ALTER TABLE affectation_photo_edl_min
ADD FOREIGN KEY (id_minute) REFERENCES minute(id);
ALTER TABLE affectation_photo_edl_min
ADD FOREIGN KEY (id_photo) REFERENCES photo(id);
