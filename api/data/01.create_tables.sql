-- Suppression des tables existantes
DROP TABLE IF EXISTS "card_has_tag", "tag", "card", "list", "users", "role";

-- Création de la table "role"
CREATE TABLE "role" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL UNIQUE DEFAULT 'member',
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table "users"
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL REFERENCES "role"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Création de la table "list"
CREATE TABLE "list" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table "card"
CREATE TABLE "card" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 1,
    "color" VARCHAR(7) NOT NULL DEFAULT '#FFFFFF',
    "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table "tag"
CREATE TABLE "tag" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "color" VARCHAR(7) NOT NULL DEFAULT '#FFFFFF',
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table "card_has_tag" (table de liaison entre "card" et "tag")
CREATE TABLE "card_has_tag" (
    "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
    "tag_id" INTEGER NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE ("card_id", "tag_id")
);

-- Affichage des tables (équivalent de `showAllTables` dans Sequelize)
-- Cette commande est spécifique à PostgreSQL et affiche toutes les tables de l'utilisateur courant
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';

-- Fin du script