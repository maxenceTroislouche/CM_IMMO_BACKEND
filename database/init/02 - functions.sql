-- Déclarations des fonctions utilisées pour les CIF

-- Récupére l'id type tiers d'un tiers
CREATE OR REPLACE FUNCTION get_id_type_tiers_from_id_tiers(id_tiers INT)
RETURNS INT AS $$
DECLARE
    id_type_tiers INT;
BEGIN
    SELECT tiers.id_type_tiers INTO id_type_tiers FROM tiers WHERE id = id_tiers;
    RETURN id_type_tiers;
END;
$$ LANGUAGE plpgsql;

-- Récupérer l'id type_tiers à partir d'un libellé
CREATE OR REPLACE FUNCTION get_id_type_tiers_from_lib(lib_to_find VARCHAR)
RETURNS INT AS $$
DECLARE
    id_type_tiers INT;
BEGIN
   SELECT id INTO id_type_tiers FROM type_tiers WHERE lib = lib_to_find;
   RETURN id_type_tiers;
END;
$$ LANGUAGE plpgsql;

-- Vérifie si le tiers possède bien le type donné
CREATE OR REPLACE FUNCTION check_tiers_is_type(id_tiers INT, lib VARCHAR)
RETURNS BOOLEAN AS $$
DECLARE
    id_type_tiers INT;
    id_type_tiers_of_tiers INT;
BEGIN
    SELECT get_id_type_tiers_from_lib(lib) INTO id_type_tiers;
    SELECT get_id_type_tiers_from_id_tiers(id_tiers) INTO id_type_tiers_of_tiers;
    RETURN id_type_tiers = id_type_tiers_of_tiers;
END;

$$ LANGUAGE plpgsql;

-- Récupérer l'id type_tiers d'un locataire
CREATE OR REPLACE FUNCTION get_id_type_locataire()
RETURNS INT AS $$
BEGIN
    RETURN get_id_type_tiers_from_lib('LOCATAIRE');
END;
$$ LANGUAGE plpgsql;

-- Récupérer l'id type_tiers d'un propriétaire
CREATE OR REPLACE FUNCTION get_id_type_proprietaire()
RETURNS INT AS $$
BEGIN
    RETURN get_id_type_tiers_from_lib('PROPRIETAIRE');
END;
$$ LANGUAGE plpgsql;

-- Check tiers est locataire
CREATE OR REPLACE FUNCTION check_tiers_is_locataire(id_tiers INT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN check_tiers_is_type(id_tiers, 'LOCATAIRE');
END;
$$ LANGUAGE plpgsql;


-- Check tiers est proprietaire
CREATE OR REPLACE FUNCTION check_tiers_is_proprietaire(id_tiers INT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN check_tiers_is_type(id_tiers, 'PROPRIETAIRE');
END;
$$ LANGUAGE plpgsql;

-- Check photo existe
CREATE OR REPLACE FUNCTION check_photo_exists(id_photo INT)
RETURNS BOOLEAN AS $$
DECLARE
    id_photo_found INT;
BEGIN
    SELECT id INTO id_photo_found FROM photo WHERE id = id_photo;
    IF id_photo_found IS NULL
    THEN
        RETURN FALSE;
    END IF;
    RETURN TRUE;
END
$$ LANGUAGE plpgsql;

-- Vérifie qu'un tableau de photo est ok
CREATE OR REPLACE FUNCTION check_all_photos_exist(photos INTEGER[])
RETURNS BOOLEAN AS $$
DECLARE
    res_check BOOLEAN;
BEGIN
    FOR i IN 1..array_length(photos, 1) LOOP
        SELECT check_photo_exists(photos[i]) INTO res_check;

        IF NOT res_check
        THEN
            RETURN FALSE;
        END IF;
    END LOOP;
    RETURN TRUE;
END;

$$ LANGUAGE plpgsql;

-- Check que le tiers est le propriétaire du bien
CREATE OR REPLACE FUNCTION check_is_tiers_the_owner(id_tiers INT, id_bien INT)
RETURNS BOOLEAN AS $$
DECLARE
    id_proprietaire INT;
BEGIN
    SELECT id_proprietaire INTO id_proprietaire FROM bien WHERE id = id_bien;
    IF id_tiers = id_proprietaire
    THEN
        RETURN TRUE;
    END IF;

    RETURN FALSE;
END;
$$ LANGUAGE plpgsql;