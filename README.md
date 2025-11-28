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

-   Backend :
    -   Copier le fichier `.env.example` dans `api/.env` et configurer les valeurs.
    -   Assurez vous d'avoir bien renseigné dans les CORS l'adresse sur laquelle votre front sera hebergé
-   Frontend :

    -   Copier le fichier `.env.example` dans `client/.env` et configurer les valeurs.
    -   Assurez vous d'avoir bien renseigner dans le fichier `vite.config.js` le serveur sur lequel le front sera hebergé :

````js
export default defineConfig({
    plugins: [svelte(), tailwindcss()],
    server: {
        host: "0.0.0.0",
        port: 4173,
        strictPort: true,
    },
    preview: {
        host: "0.0.0.0",
        port: 4173,
        allowedHosts: ["sylvainzigoni-server.eddi.cloud"],
    },
});
    ```

-   BDD : copier le fichier `.database.docker.env.example` dans `/database.docker.env` et configurer les valeurs

3. **Lancer le projet**

-   Dans votre terminal, apres vous etre assuré que Docker est installé sur votre machine, lancer la commande : `docker compose up -d --build`
-   Assurez vous que tous les conteneurs sont en ligne.
-   Rendez vous à l'adresse http://localhost:4173

## Déployer le projet :
````
