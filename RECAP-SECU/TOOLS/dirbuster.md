# Trouver des pages cachées sur un site

Pour cela on utilise le logiciel DirBuster et un dictionnaire contenant 87k+ noms de fichiers/dossiers.

## Pré-requis

Pour installer & utiliser DirBuster, il suffit de cloner le dépôt puis de lancer le script fourni :

```bash
git clone https://gitlab.com/kalilinux/packages/dirbuster.git
cd dirbuster
./DirBuster-1.0-RC1.sh
```

Le dépôt cloné contient déjà le fichier dictionnaire nécessaire (`directory-list-2.3-small.txt`).

## Instructions

Ouvrez DirBuster (lancez le script, voir pré-requis ci-dessus), entrez l'URL du site que vous voulez scanner, augmentez potentiellement le nombre de threads & cochez la case `Go Faster`.

Décochez la case `Be Recursive` et ajoutez le dictionnaire `directory-list-2.3-small.txt` dans le champ `File with list of dirs/files`.

Lancez le bruteforce en cliquant sur `Start`. La page `debug.php` devrait être trouvée en quelques secondes.
