-- Insertion des rôles
INSERT INTO "role" ("id", "name") 
VALUES 
(DEFAULT, 'member'),
(DEFAULT, 'admin');

-- Insertion des utilisateurs
-- Lorenzo (admin)
INSERT INTO "users" ("id", "username", "password", "role_id", "created_at", "updated_at") 
VALUES 
(DEFAULT, 'lorenzo', '$argon2id$v=19$m=65536,t=3,p=4$PS4ZaPbBfE4KZhOQOeXpMA$2LrzkJYjLtXcvk1TV2ywQ44lXGAh+cKjaEgHPzr0YnY', 2, NOW(), NOW());

-- André (member)
INSERT INTO "users" ("id", "username", "password", "role_id", "created_at", "updated_at") 
VALUES 
(DEFAULT, 'André', '$argon2id$v=19$m=65536,t=3,p=4$PS4ZaPbBfE4KZhOQOeXpMA$2LrzkJYjLtXcvk1TV2ywQ44lXGAh+cKjaEgHPzr0YnY', 1, NOW(), NOW());

-- Insertion des listes
INSERT INTO "list" ("id", "title", "position", "created_at", "updated_at") 
VALUES 
(DEFAULT, 'Liste des courses', 1, NOW(), NOW()),
(DEFAULT, 'Liste des anniversaires', 2, NOW(), NOW()),
(DEFAULT, 'Liste des apprennants', 3, NOW(), NOW());

-- Insertion des cartes
INSERT INTO "card" ("id", "content", "color", "position", "list_id", "created_at", "updated_at") 
VALUES 
(DEFAULT, 'Café', '#5c3715', 1, 1, NOW(), NOW()),
(DEFAULT, 'Thé', '#0d3d0f', 2, 1, NOW(), NOW()),
(DEFAULT, 'Reblochon savoyard', '#FFFFFF', 3, 1, NOW(), NOW()),

(DEFAULT, 'Maman le 01/01/1970', '#FFFFFF', 1, 2, NOW(), NOW()),
(DEFAULT, 'Mamie le 01/01/1940', '#FFFFFF', 2, 2, NOW(), NOW()),

(DEFAULT, 'John Doe', '#FFFFFF', 1, 3, NOW(), NOW());

-- Insertion des tags
INSERT INTO "tag" ("id", "name", "color", "created_at", "updated_at") 
VALUES 
(DEFAULT, 'Urgent', '#FF0000', NOW(), NOW()),
(DEFAULT, 'Eco-responsable', '#00FF00', NOW(), NOW());

-- Association des tags avec les cartes (table de liaison)
INSERT INTO "card_has_tag" ("card_id", "tag_id", "created_at") 
VALUES 
(1, 1, NOW()), -- Café : Urgent
(1, 2, NOW()), -- Café : Eco-responsable
(3, 1, NOW()), -- Reblochon savoyard : Urgent
(4, 1, NOW()); -- Maman le 01/01/1970 : Urgent