CREATE TABLE ville (
    id SERIAL NOT NULL,
    code_postal INT NOT NULL,
    nom VARCHAR(50) NOT NULL,
    CONSTRAINT ville_pk PRIMARY KEY (id)
);
CREATE TABLE type_bien (
    id SERIAL NOT NULL,
    lib VARCHAR(100),
    CONSTRAINT type_bien_pk PRIMARY KEY (id)
);
CREATE TABLE type_chauffage (
    id SERIAL NOT NULL,
    lib VARCHAR(100),
    CONSTRAINT type_chauffage_pk PRIMARY KEY (id)
);
CREATE TABLE type_eau_chaude (
    id SERIAL NOT NULL,
    lib VARCHAR(100),
    CONSTRAINT type_eau_chaude_pk PRIMARY KEY (id)
);
CREATE TABLE type_tiers (
    id SERIAL NOT NULL,
    lib VARCHAR(100),
    CONSTRAINT type_tiers_pk PRIMARY KEY (id)
);
CREATE TABLE type_piece (
    id SERIAL NOT NULL,
    lib VARCHAR(100),
    CONSTRAINT type_piece_pk PRIMARY KEY (id)
);
CREATE TABLE fonction_piece (
    id SERIAL NOT NULL,
    lib VARCHAR(100),
    CONSTRAINT fonction_piece_pk PRIMARY KEY (id)
);
CREATE TABLE agent (
    id SERIAL NOT NULL,
    nom_utilisateur VARCHAR(100) NOT NULL,
    mot_de_passe VARCHAR(1000) NOT NULL,
    CONSTRAINT agent_pk PRIMARY KEY (id)
);
CREATE TABLE photo (
    id SERIAL PRIMARY KEY,
    chemin VARCHAR(100) NOT NULL
);

CREATE TABLE tiers (
    id SERIAL NOT NULL,
    id_type_tiers INT NOT NULL,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    date_de_naissance DATE NOT NULL,
    numero_securite_sociale VARCHAR(100) NOT NULL,
    rib VARCHAR(100) NOT NULL,
    CONSTRAINT tiers_pk PRIMARY KEY (id),
    CONSTRAINT tiers_fk1 FOREIGN KEY (id_type_tiers) REFERENCES type_tiers(id)
);
CREATE TABLE bien (
    id SERIAL NOT NULL,
    id_proprietaire INT NOT NULL,
    id_ville INT NOT NULL,
    id_type_bien INT NOT NULL,
    id_type_chauffage INT NOT NULL,
    id_type_eau_chaude INT NOT NULL,
    num_rue INT NOT NULL,
    nom_rue VARCHAR(100) NOT NULL,
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    etage INT,
    num_appartement INT,
    date_creation DATE NOT NULL,
    classification_taille VARCHAR(50) NOT NULL,
    surface_habitable INT NOT NULL,
    description VARCHAR(5000),
    photos INT [],
    CONSTRAINT bien_pk PRIMARY KEY (id),
    CONSTRAINT bien_fk1 FOREIGN KEY (id_proprietaire) REFERENCES tiers(id),
    CONSTRAINT bien_fk2 FOREIGN KEY (id_ville) REFERENCES ville(id),
    CONSTRAINT bien_fk3 FOREIGN KEY (id_type_bien) REFERENCES type_bien(id),
    CONSTRAINT bien_fk4 FOREIGN KEY (id_type_chauffage) REFERENCES type_chauffage(id),
    CONSTRAINT bien_fk5 FOREIGN KEY (id_type_eau_chaude) REFERENCES type_eau_chaude(id)
);
CREATE TABLE bail (
    id SERIAL NOT NULL,
    id_locataire INT NOT NULL,
    id_proprietaire INT NOT NULL,
    id_bien INT NOT NULL,
    date_debut DATE,
    date_fin DATE,
    nombre_cle INT,
    CONSTRAINT bail_pk PRIMARY KEY (id),
    CONSTRAINT bail_fk1 FOREIGN KEY (id_locataire) REFERENCES tiers(id),
    CONSTRAINT bail_fk2 FOREIGN KEY (id_proprietaire) REFERENCES tiers(id),
    CONSTRAINT bail_fk3 FOREIGN KEY (id_bien) REFERENCES bien(id)
);
CREATE TABLE piece (
    id SERIAL NOT NULL,
    id_bien INT NOT NULL,
    id_type_piece INT NOT NULL,
    id_fonction_piece INT NOT NULL,
    numero INT NOT NULL,
    description VARCHAR(500),
    surface INT NOT NULL,
    CONSTRAINT piece_pk PRIMARY KEY (id),
    CONSTRAINT piece_fk1 FOREIGN KEY (id_bien) REFERENCES bien(id),
    CONSTRAINT piece_fk2 FOREIGN KEY (id_type_piece) REFERENCES type_piece(id),
    CONSTRAINT piece_fk3 FOREIGN KEY (id_fonction_piece) REFERENCES fonction_piece(id)
);
CREATE TABLE type_element (
    id SERIAL NOT NULL,
    lib VARCHAR(100) NOT NULL,
    data_obligatoire JSON,
    CONSTRAINT type_element_pk PRIMARY KEY (id)
);
CREATE TABLE element (
    id SERIAL NOT NULL,
    id_element_parent INT,
    id_type_element INT NOT NULL,
    id_piece INT NOT NULL,
    numero INT NOT NULL,
    description JSON,
    CONSTRAINT element_pk PRIMARY KEY (id),
    CONSTRAINT element_fk1 FOREIGN KEY (id_element_parent) REFERENCES element(id),
    CONSTRAINT element_fk2 FOREIGN KEY (id_type_element) REFERENCES type_element(id),
    CONSTRAINT element_fk3 FOREIGN KEY (id_piece) REFERENCES piece(id)
);
CREATE TABLE etat_des_lieux (
    id SERIAL NOT NULL,
    id_bail INT NOT NULL,
    id_agent INT NOT NULL,
    est_entrant BOOL NOT NULL,
    date_realisation DATE,
    avancement INT,
    CONSTRAINT etat_des_lieux_pk PRIMARY KEY (id),
    CONSTRAINT etat_des_lieux_fk1 FOREIGN KEY (id_bail) REFERENCES bail(id),
    CONSTRAINT etat_des_lieux_fk2 FOREIGN KEY (id_agent) REFERENCES agent(id)
);
CREATE TABLE minute (
    id_edl INT NOT NULL,
    id_element INT NOT NULL,
    photos INT [],
    remarque VARCHAR(500),
    note INT,
    CONSTRAINT minute_pk PRIMARY KEY (id_edl, id_element),
    CONSTRAINT minute_fk1 FOREIGN KEY (id_edl) REFERENCES etat_des_lieux(id),
    CONSTRAINT minute_fk2 FOREIGN KEY (id_element) REFERENCES element(id)
);

CREATE TABLE signature_agent (
    id SERIAL PRIMARY KEY,
    chemin VARCHAR(100) NOT NULL,
    id_edl INT NOT NULL,
    date_signature DATE NOT NULL,
    id_agent INT NOT NULL,
    CONSTRAINT signature_agent_fk2 FOREIGN KEY (id_edl) REFERENCES etat_des_lieux(id),
    CONSTRAINT signature_agent_fk1 FOREIGN KEY (id_agent) REFERENCES agent(id)
);
CREATE TABLE signature_locataire (
    id SERIAL PRIMARY KEY,
    chemin VARCHAR(100) NOT NULL,
    id_edl INT NOT NULL,
    date_signature DATE NOT NULL,    
    id_locataire INT NOT NULL,
    CONSTRAINT signature_locataire_fk2 FOREIGN KEY (id_edl) REFERENCES etat_des_lieux(id),
    CONSTRAINT signature_locataire_fk1 FOREIGN KEY (id_locataire) REFERENCES tiers(id)
);
CREATE TABLE signature_proprietaire (
    id SERIAL PRIMARY KEY,
    chemin VARCHAR(100) NOT NULL,
    id_edl INT NOT NULL,
    date_signature DATE NOT NULL,     
    id_proprietaire INT NOT NULL,
    CONSTRAINT signature_proprietaire_fk2 FOREIGN KEY (id_edl) REFERENCES etat_des_lieux(id),
    CONSTRAINT signature_proprietaire_fk1 FOREIGN KEY (id_proprietaire) REFERENCES tiers(id)
);