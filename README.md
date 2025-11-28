# O'Kanban

## Projet :

### Backend

-   Node.js
-   Express
-   Sequelize

### Frontend

-   Svelte + Vite

### BDD

-   PostgreSQL

## ⚙️ Installation et lancement

### Prérequis

-   **Node.js** (version 22 ou supérieure)
-   **PostgreSQL** (base de données)

### Étapes

1. **Cloner le dépôt**
2. **Configurer les variables d'environnement**

-   Backend : Copier le fichier `.env.example` dans `api/.env` et configurer les valeurs (notamment PG_URL pour la base de données PostgreSQL).
-   Frontend : Copier le fichier `.env.example` dans `client/.env` et configurer l'URL de l'API (`VITE_API_URL`).

3. **Installer les dépendances et lancer les projets**

-   Backend & Frontend

```bash
npm i
# Installation des modules bnack et front en même temps grâce à concurrently
npm run app:install
# Réinitialisation de ls BDD
npm run db:reset
# Démarre les serveurs de dèv front et back, avec concurrently
npm run dev
```

## PostgreSQL

### Astuce

Si on a une table "user" au singulier et en minusucule, il faudra faire attention à mettre des doubles guillemets quand on fait des requêtes à la main, sinon psql ira demander le nom de l'utilisateur de la BDD.
