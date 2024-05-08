-- CIF Signatures locataire
-- On vérifie si le signataire d'une signature locataire est bien un locataire
CREATE OR REPLACE FUNCTION check_signature_locataire()
RETURNS TRIGGER AS $$
DECLARE
    is_locataire BOOLEAN;
BEGIN
    SELECT check_tiers_is_locataire(NEW.id_locataire) INTO is_locataire;

    IF NOT is_locataire THEN
        RAISE EXCEPTION '[signature_locataire] Echec de l''insertion, le tiers n''est pas un locataire';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_signature_locataire
BEFORE INSERT OR UPDATE ON signature_locataire
FOR EACH ROW
EXECUTE FUNCTION check_signature_locataire();

-- CIF Signatures proprietaire
-- On vérifie si le signataire d'une signature propriétaire est bien un propriétaire
CREATE OR REPLACE FUNCTION check_signature_proprietaire()
RETURNS TRIGGER AS $$
DECLARE
    is_proprietaire BOOLEAN;
BEGIN
    SELECT check_tiers_is_proprietaire(NEW.id_proprietaire) INTO is_proprietaire;

    IF NOT is_proprietaire THEN
        RAISE EXCEPTION '[signature_proprietaire] Echec de l''insertion, le tiers n''est pas un propriétaire';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_signature_proprietaire
BEFORE INSERT OR UPDATE ON signature_proprietaire
FOR EACH ROW
EXECUTE FUNCTION check_signature_proprietaire();

-- CIF Bien => Vérifier le propriétaire
CREATE OR REPLACE FUNCTION check_proprietaire_bien()
RETURNS TRIGGER AS $$
DECLARE
    is_proprietaire BOOLEAN;
BEGIN
    SELECT check_tiers_is_proprietaire(NEW.id_proprietaire) INTO is_proprietaire;

    IF NOT is_proprietaire
    THEN
        RAISE EXCEPTION '[bien] Echec de l''insertion, le propriétaire n''est pas de type propriétaire';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_proprietaire_bien
BEFORE INSERT OR UPDATE ON bien
FOR EACH ROW
EXECUTE FUNCTION check_proprietaire_bien();

-- CIF Bien => Vérifier que chaque photo est une clé étrangère vers la table photo
CREATE OR REPLACE FUNCTION check_photos_bien()
RETURNS TRIGGER AS $$
DECLARE
    res_check BOOLEAN;
BEGIN
    SELECT check_all_photos_exist(NEW.photos) INTO res_check;

    IF NOT res_check
    THEN
        RAISE EXCEPTION '[bien] une ou plusieurs photos du bien n''existe(nt) pas';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_photos_bien
BEFORE INSERT OR UPDATE ON bien
FOR EACH ROW
EXECUTE FUNCTION check_photos_bien();

-- CIF Bail => Date début < Date fin
CREATE OR REPLACE FUNCTION check_dates_bail()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.date_debut >= NEW.date_fin
    THEN
        RAISE EXCEPTION '[bail] date debut >= date fin';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_check_dates_bail
BEFORE INSERT OR UPDATE ON bail
FOR EACH ROW
EXECUTE FUNCTION check_dates_bail();

-- CIF Bail => Vérifier que le propriétaire est bien le propriétaire du bien
CREATE OR REPLACE FUNCTION check_proprietaire_bail()
RETURNS TRIGGER AS $$
DECLARE
    res_check BOOLEAN;
BEGIN
    SELECT check_is_tiers_the_owner(NEW.id_proprietaire, NEW.id_bien) INTO res_check;
    IF NOT res_check
    THEN
        RAISE EXCEPTION '[bail] Le propriétaire du bail n''est pas le propriétaire du bien !';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_proprietaire_bail
BEFORE INSERT OR UPDATE ON bail
FOR EACH ROW
EXECUTE FUNCTION check_proprietaire_bail();

-- CIF Bail => Vérifier que le locataire est bien de type locataire
CREATE OR REPLACE FUNCTION check_locataire_bail()
RETURNS TRIGGER AS $$
DECLARE
    res_check BOOLEAN;
BEGIN
    SELECT check_tiers_is_locataire(NEW.id_locataire) INTO res_check;
    IF NOT res_check
    THEN
        RAISE EXCEPTION '[bail] Le locataire n''est pas un locataire !';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_locataire_bail
BEFORE INSERT OR UPDATE ON bail
FOR EACH ROW
EXECUTE FUNCTION check_locataire_bail();

-- CIF element => Vérifier que la description correspond aux data obligatoires

-- CIF Minute => Vérifier que chaque photo est une clé étrangère vers la table photo
CREATE OR REPLACE FUNCTION check_photos_minute()
RETURNS TRIGGER AS $$
DECLARE
    res_check BOOLEAN;
BEGIN
    SELECT check_all_photos_exist(NEW.photos) INTO res_check;

    IF NOT res_check
    THEN
        RAISE EXCEPTION '[minute] une ou plusieurs photos de la minute n''existe(nt) pas';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_photos_minute
BEFORE INSERT OR UPDATE ON minute
FOR EACH ROW
EXECUTE FUNCTION check_photos_minute();