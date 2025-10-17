# A07 - Authentification de mauvaise qualité

[Lien Top10](https://owasp.org/Top10/fr/A07_2021-Identification_and_Authentication_Failures/)

Ce qu'OWASP appelle une authentification de mauvaise qualité est un système qui n'est pas protégé contre les attaques par bruteforce (avec ou sans dictionnaire), qui utilise des mots de passe par défaut / très faibles (`admin/admin`).

L'absence d'un système d'authentification par facteurs multiples, l'utilisation d'algorithmes de hachage obsolètes ou l'absence de hachage des mots de passe rentre aussi dans cette catégorie.

Il est impératif de protéger nos applications des attaques bruteforce, et si possible l'idéal est de mettre en place l'authentification par facteurs multiples (une piste pour mettre en place un tel système est disponible [ici](https://grafikart.fr/tutoriels/authentification-2-facteurs-totp-630)).

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A06](README-A06.md)

:next_track_button: [Suivant : A08](README-A08.md)