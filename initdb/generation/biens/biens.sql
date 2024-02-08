DELIMITER $$

CREATE PROCEDURE insert_bien_data(IN num_inserts INT)
BEGIN
    DECLARE i INT DEFAULT 0;

    WHILE i < num_inserts DO
        -- Générer des valeurs aléatoires pour les champs
        DECLARE id_ville_temp INT;
        DECLARE id_type_bien_temp INT;
        DECLARE etage_temp INT;
        DECLARE num_appartement_temp INT;
        DECLARE date_creation_temp DATE;
        DECLARE classification_taille_temp VARCHAR(50);
        DECLARE surface_habitable_temp INT;
        DECLARE type_chauffage_temp VARCHAR(50);
        
        -- Générer des valeurs aléatoires pour les champs
        SET id_ville_temp = (SELECT id FROM ville ORDER BY RAND() LIMIT 1);
        SET id_type_bien_temp = (SELECT id_type_bien FROM type_bien ORDER BY RAND() LIMIT 1);

        IF id_type_bien_temp IN (2, 4, 5, 6) THEN
            SET etage_temp = 1;
        ELSE
            SET etage_temp = ROUND(RAND() * 8) + 1; -- Valeur aléatoire entre 1 et 9
        END IF;

        SET num_appartement_temp = ROUND(RAND() * 8) + 1; -- Valeur aléatoire entre 1 et 9

        SET date_creation_temp = DATE_ADD(DATE('1950-01-01'), INTERVAL ROUND(RAND() * DATEDIFF(CURDATE(), '1950-01-01')) DAY);

        SET classification_taille_temp = CASE ROUND(RAND() * 3)
            WHEN 0 THEN 'T1'
            WHEN 1 THEN 'T2'
            WHEN 2 THEN 'T3'
            WHEN 3 THEN 'T4'
            ELSE 'autre'
        END;

        SET surface_habitable_temp = ROUND(RAND() * 130) + 20; -- Valeur aléatoire entre 20 et 150

        SET type_chauffage_temp = CASE ROUND(RAND() * 2)
            WHEN 0 THEN 'electrique'
            WHEN 1 THEN 'charbon'
            WHEN 2 THEN 'radiateur'
            ELSE 'electrique'
        END;

        -- Effectuer l'insertion dans la table bien
        INSERT INTO bien (num_rue, nom_rue, id_ville, id_type_bien, etage, num_appartement, date_creation, classification_taille, surface_habitable, type_chauffage, num_version)
        VALUES (ROUND(RAND() * 99), 'Nom Rue ', id_ville_temp, id_type_bien_temp, etage_temp, num_appartement_temp, date_creation_temp, classification_taille_temp, surface_habitable_temp, type_chauffage_temp, 1);

        SET i = i + 1;
    END WHILE;
END $$

DELIMITER ;
