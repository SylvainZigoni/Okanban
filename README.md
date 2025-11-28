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

-   Backend : Copier le fichier `.env.example` dans `api/.env` et configurer les valeurs.
-   Frontend : Copier le fichier `.env.example` dans `client/.env` et configurer les valeurs.
-   BDD : copier le fichier `.database.docker.env.example` dans `/database.docker.env` et configurer les valeurs

3. **Lancer le projet**

-   Dans votre terminal, apres vous etre assuré que Docker est installé sur votre machine, lancer la commande : `docker compose up -d --build`
-   Assurez vous que tous les conteneurs sont en ligne.
-   Rendez vous à l'adresse http://localhost:4173

## Déployer le projet :
