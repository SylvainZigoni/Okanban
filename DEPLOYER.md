# Déployer le site à l'aide de Dockerhub sur un VPS

## Publier les images sur Dockerhub

1.  **Assurez vous d'avoir un compte Dockerhub**
2.  Apres avoir monter les images des conteneurs sur votre machine, ajouter un tag à ces dernières :

```bash
docker tag <image_id> <username Dockerhub>/<tag souhaité>

# Exemple :
docker tag d2de sylvainzigoni/okanban-api
docker tag c4f3 sylvainzigoni/okanban-client
docker tag a38f sylvainzigoni/okanban-db
```

3.  Assurez vous que les tags ont bien été ajoutés : `docker images`
4.  **Push** des images sur Dockerhub :

```bash
docker push <username Dockerhub>/<nom du tag>

# Exemple :
docker push sylvainzigoni/okanban-api
docker push sylvainzigoni/okanban-client
docker push sylvainzigoni/okanban-db
```

5.  Connectez vous à votre compte Dockerhub pour vous assurer que les images y sont bien présentes

## Publier sur le serveur VPS

### Connexion au VPS et installation de Docker

_Ici on prendra l'exemple de la VM cloud Kourou_
https://kourou.oclock.io/ressources/vm-cloud/

1.  Démarrer la VM
2.  A partir de votre terminal connectez vous à la VM via une clef SSH
3.  Installer Docker sur la VM :

```Bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
sudo reboot
```

_Si jamais un password est demandé :_ **"over the clouds"** _=> A mettre en francais_

4.  La VM devrait redemarrer
5.  Reconnectez vous à la VM avec la clef SSH

### Récupérer les images Docker et configurer Docker

1.  Se connecter à son compte Dockerhub depuis la VM :

```Bash
docker login
```

Pour valider l'authentification Docker va nous fournir un code.

2.  Récupérer nos images Docker

```Bash
docker pull <username Dockerhub>/<nom image>

# Exemple :
docker pull sylvainzigoni/okanban-client
docker pull sylvainzigoni/okanban-api
docker pull sylvainzigoni/okanban-db
```

3.  Vérifier que l'on a bien récuperer nos images

```bash
docker images
```

4.  Copie des fichiers pour initialiser la db.
    Les fichiers pour initialiser la db etant dans le conteneur okanban-api et non enregistré sur le server VM. Il faut les copier dans `./api` sur le serveur

```bash
docker cp temp-api:/usr/src/app/data ./api
```

On peut ensuite supprimer notre docker temporaire

```bash
docker rm temp-api
```

5. Ouverture du port 4173 de la VM

```bash
sudo ufw allow 4173/tcp
sudo ufw reload
```

Puis on vérifie que le port est bien ouvert

```bash
sudo ufw status
```

6.  Création d'un fichier `docker-compose.yml` pour monter nos images

```bash
nano docker-compose.yml
```

7.  Renseigner le docker-compose :

```bash
services:
  api:
    image: <username Dockerhub>/okanban-api
    container_name: okanban-api
    ports:
      - 3000:3000
    depends_on:
      - db
    environment:
      - DB_URL=postgres://okanban:okanban@okanban-database:5432/okanban
    networks:
      - okanban-network

  client:
    image: <username Dockerhub>/okanban-client
    container_name: okanban-client
    ports:
      - "0.0.0.0:4173:4173"
    depends_on:
      - api
    environment:
      - VITE_API_URL=http://api:3000
    networks:
      - okanban-network

  db:
    image: <username Dockerhub>/okanban-database
    container_name: okanban-database
    environment:
      - POSTGRES_USER=okanban
      - POSTGRES_PASSWORD=okanban
      - POSTGRES_DB=okanban
    volumes:
      - ./api/data:/docker-entrypoint-initdb.d
      - pg-okanban:/var/lib/postgresql
    networks:
      - okanban-network

volumes:
  pg-okanban:

networks:
  okanban-network:
    driver: bridge
```

**Notes** :

> Dans un environnement non étudiant, il sera fortement conseillé de créer un fichier .env contenant les informations plus ou moins critiques afin de ne pas les exposer
> Ce fichier .env à la racine de notre projet dans la VM sera ensuite a appeler dans le fichier `docker-compose.yml`

8.  Lancer l'application

```bash
docker compose up -d
```

9.  Vérifier le fonctionnement en local sur la VM

```bash
# front
curl http://localhost:4173

# back
curl http://localhost:3000
```

10. Vérifier que les ports sont ouverts

```bash
docker port okanban-client
docker port okanban-api
docker port okanban-database
```

### Mise en place d'un reverse proxy **nginx**

1.  Installer nginx

```bash
sudo apt update
sudo apt install nginx
```

2.  Créer le fichier de configuration pour nginx

```bash
sudo nano /etc/nginx/sites-available/okanban
```

Et le renseigner :

```bash
server {
    listen 80;
    server_name <nom de ton serveur>;  # Remplace par ton domaine

    location / {
        proxy_pass http://localhost:4173;  # Port de ton application front
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

```

3.  Activer la configuration **nginx**

```bash
sudo ln -s /etc/nginx/sites-available/okanban /etc/nginx/sites-enabled
```

4.  Tester la configuration de **nginx**

```bash
sudo nginx -t
```

On attend un retour de la sorte : `syntax is ok` et `test is successful`

5.  Redemarrer **nginx**

```bash
sudo systemclt restart nginx
```

6.  L'application est disponible à l'adresse : http://<ton nom eddi.cloud>-server.eddi.cloud

### Configuration https avec **Cerbot**

1.  Installation de **Cerbot**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d <ton nom eddi.cloud>.eddi.cloud
```

**Notes**

> Suivre les instructions pour obtenir un certificat SSL
> **Nginx** sera configuré automatiquement pour du https

## Ca y est le site est déployé sur la VM en HTTP et HTTPS

> http://sylvainzigoni-server.eddi.cloud/ <br> >https://sylvainzigoni-server.eddi.cloud/
