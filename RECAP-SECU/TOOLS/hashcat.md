# Retrouver un MDP à partir de son hash MD5

La fonction de hachage MD5 n'est pas adaptée au stockage en BDD de mots de passe. Son problème ? Elle est trop rapide ! Un attaquant avec une bonne carte graphique (ou mieux, un rig de minage de crypto-monnaie) peut relativement rapidement bruteforcer un hash pour retrouver le mot de passe d'origine.

Démonstration !

**Ce logiciel ne fonctionne pas sur les VM, il faut tester sur une machine qui a une carte graphique et installer le pilote correspondant nvidia ou amd. Lire la doc**

## Logiciel : hashcat

Pour bruteforcer des hash MD5, nous allons utiliser [hashcat](https://hashcat.net/hashcat/). Hashcat permet aussi de retrouver un mot de passe grâce à une attaque par dictionnaire.

Pour l'installer sur Ubuntu/Debian :

```bash
sudo apt install hashcat
# si vous avez une CG Nvidia, installez aussi :
sudo apt install hashcat-nvidia
```

Pour Windows, voir le site d'hashcat.

**:warning: Attention, il faut effectuer les manipulation de ce wiki sur votre hôte, pas sur une VM !**

## Un mot de passe très simple

Essayons de retrouver le mot de passe de notre administrateur, `rocknroll`, à partir de son hash.

Générer le hash correspondant :

```bash
echo -n "rocknroll" | md5sum
```

Puis lancer les commandes suivantes :

```bash
# pour analyser le type de hash possible :
hashcat '3e29d9d93ad04d5bc71d4cdc5a8ad820'
# pour essayer de casser le hash md5 :
hashcat '3e29d9d93ad04d5bc71d4cdc5a8ad820' -m 0
 # pour afficher les résultats :
hashcat '3e29d9d93ad04d5bc71d4cdc5a8ad820' -m 0 --show
```

Ce mot de passe est tellement simple et connu que hashcat le retrouve même sans qu’on lui fournisse de dictionnaire.

## Un mot de passe plus complexe

Essayons avec un mot de passe plus complexe, alphanumérique (sans majuscule) :

```bash
# générer un mdp alphanumérique de 8 caractères (sans maj) :
tr -dc a-z0-9 </dev/urandom | head -c 8 ; echo ''
# récupérer son hash :
echo -n "9usux763" | md5sum
# bruteforcer ce hash :
hashcat 'dc6047e0b7794898ca4210d6bede51a0' -m 0 -a 3 -1 ?l?d ?1?1?1?1?1?1?1?1 -O
```

Comme on peut le voir, un MDP alphanumérique sans majuscule tient à peine quelques secondes …

Et pour finir, encore plus complexe : un mot de passe alphanumérique avec majuscules.

```bash
tr -dc A-Za-z0-9 </dev/urandom | head -c 8 ; echo ''
echo -n "Cgvao3JM" | md5sum
hashcat '0d432e7935529482cf24e1f1a8b68139' -m 0 -a 3 -1 ?l?u?d ?1?1?1?1?1?1?1?1 -O
```

Sur ma machine (32gb ram, CG nvidia), bruteforcer un tel MDP prendrait environ 1h. Rajoutez des caractères spéciaux et augmentez la longueur du MDP, et l’opération prendra beaucoup plus de temps ! (mais ça reste un temps dérisoire par rapport à des fonctions de hachage plus complexes).
