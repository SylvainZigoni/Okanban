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

### Récupérer les images Docker

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

4.  Création d'un fichier docker-compose.yml

```bash
nano docker-compose.yml
```

5.  Renseigner le docker-compose :

```bash
version: '3.8'

services:
  api:
    image: sylvainzigoni/okanban-api
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
    image: sylvainzigoni/okanban-client
    container_name: okanban-client
    ports:
      - 4173:4173
    depends_on:
      - api
    environment:
      - VITE_API_URL=http://api:3000
    networks:
      - okanban-network

  db:
    image: sylvainzigoni/okanban-database
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
