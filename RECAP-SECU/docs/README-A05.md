# A05 - Mauvaise configuration de sécurité

[Lien Top10](https://owasp.org/Top10/fr/A05_2021-Security_Misconfiguration/)

Sur la page du Top10, on nous dit par exemple qu'une application peut être concernée si :

- certaines couches de l'application ou services externes sont mal configurés (exemple : compte root non désactivé et avec un mot de passe faible sur le serveur de BDD)
- la **surface d'attaque** n'a pas été réduit à son minimum (fonctionnalités/bibliothèques/services inutiles activés par exemple, ou comptes utilisateurs inutiles présents)
- des mots de passe par défaut n'ont pas été changés
- **des informations sont divulguées dans les messages d'erreur**
- des fonctionnalités de sécurité sont désactivées ou mal configurées (exemple : les politiques CORS ne sont pas correctement configurées)

Cette catégorie peut-être difficile à traiter : plus notre application web va être complexe, plus nombreux seront les différents services et outils à configurer correctement ... La bonne nouvelle c'est qu'en tant que développeurs, certains points listés ci-dessus ne nous concernent pas directement ! C'est en effet plutôt aux administrateurs système de configurer les logiciels comme Apache, MySQL, etc. Ce n'est malheureusement pas toujours possible (petite entreprise, freelance, etc.), nous allons donc voir quelques pistes pour configurer correctement ces services.

Certains points sont en revanche de notre ressort : la configuration des [politiques CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) doit être effectuée dans notre code coté serveur (PHP, NodeJS, etc. - se reporter à la documentation spécifique au langage utilisé), les informations potentiellement divulguées par les messages d'erreur ne doivent pas être visibles de nos visiteurs, et il faut bien penser à réduire au maximum la surface d'attaque (ne pas garder de comptes utilisateurs inutiles dans la BDD, supprimer les pages inutiles, etc.).

## Divulgation d'informations : pages 404 & Headers

Par défaut, les serveurs web comme Apache ou Nginx ont tendance à délivrer un peu trop d'infos (leur nom, leur version). Idem pour PHP ! Pour le constater, vous pouvez ouvrir un terminal et lancer la commande `curl -I http://user-server.eddi.cloud` (l'argument `-I` permet de n'afficher que les entêtes HTTP).

Ces informations sont aussi visibles dans l'extension (Chrome & Firefox) Wappalyzer.

On peut le voir, PHP indique être en version 8.0.19, et Apache en version 2.4.53.

> Et en quoi c'est un problème ?

La première étape d'une attaque information c'est souvent la recherche d'informations sur le système cible. Ce serait pas plus mal de ne pas faciliter la tâche aux hackers !

### Faire passer Apache pour ... IIS !

Nous allons commencer par faire passer notre serveur Apache pour un serveur IIS (le serveur web de Microsoft). Ceci induira les éventuels hackers en erreur, au moins un certain temps.

Pour ce faire, on va devoir installer modsecurity, un module d'Apache qui est en fait un puissant WAF (Web Application Firewall). Ajoutez les lignes suivantes au fichier `Dockerfile`, puis compilez l'image (via `docker compose up --build` si vous voulez tester en local, ou via le workflow Github Actions).

```
# install Apache Mod Security
RUN apt update && apt install -y libapache2-mod-security2 nano && a2enmod security2
```

Pour finir, on doit configurer modsecurity. Lancez la commande `docker ps` (en local ou en SSH sur votre VM Serveur Kourou, selon votre environnement) pour récupérer l'id du conteneur hébergeant notre application, puis lancez `docker exec -it <id_conteneur> bash` pour ouvrir un terminal dans ce conteneur.

Une fois à l'intérieur du conteneur, lancez la commande `nano /etc/apache2/conf-available/security.conf` et modifiez les lignes suivantes :

```
ServerTokens Full
ServerSignature Off
```

Pour finir ajoutez la ligne `SecServerSignature Microsoft-IIS/10.0`.

On peut aussi complètement cacher toute information liée à Apache dans les headers avec la ligne suivante : `SecServerSignature " "`.

Fermez le terminal du conteneur et relancez le service (depuis Portainer avec le bouton "Update the service" ou en ligne de commande avec un `docker compose down`). Si vous lancez à nouveau la commande `curl -I http://user-server.eddi.cloud` vous devriez voir nos nouveaux headers ! :tada:

Essayez aussi de charger une page 404. La version d'Apache n'apparaît plus non plus sur les pages 404 par défaut.

### Cacher la version de PHP

Il nous reste la version de PHP à cacher. Pour cela, on doit modifier le fichier de configuration de PHP, `php.ini`, et remplacer `expose_php = on` par `expose_php = off`. Habituellement, ce fichier se trouve dans le dossier `/etc/php/`, mais dans l'image Docker que nous utilisons ce fichier est situé dans le dossier `/usr/local/etc/php/`.

Nous allons aussi en profiter pour copier la configuration de production proposée par l'image Docker officielle de PHP.

Ajoutez les lignes suivantes au fichier `Dockerfile`, puis compilez et relancez le conteneur :

```
RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN sed -i '/expose_php = On/c\expose_php = off' $PHP_INI_DIR/php.ini
```

Vérifiez à nouveau avec la commande curl précédente, le header `X-Powered-By` devrait avoir disparu.

Vous pouvez aussi tester sur Wappalyzer : plus aucune infos n'est dispo ! :tada: (si ce n'est pas le cas, videz le cache de Wappalyzer)

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A04](README-A04.md)

:next_track_button: [Suivant : A06](README-A06.md)