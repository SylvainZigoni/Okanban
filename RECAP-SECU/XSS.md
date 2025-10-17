# Les Failles XSS (Cross-Site Scripting)

## Objectifs

- Comprendre ce qu'est une faille XSS
- Connaître les différents types de failles XSS
- Savoir comment se protéger contre les attaques XSS

## Une faille XSS, c'est quoi  ?

Une faille XSS (Cross-Site Scripting) est une faille de sécurité qui permet à un attaquant d'exécuter du code JavaScript dans le navigateur des victimes.  Ces attaques peuvent être utilisées pour voler des données, prendre le contrôle de comptes, ou infecter des sites web.  Les attaques XSS sont très courantes et peuvent avoir des conséquences graves.

Il existe plusieurs types de failles XSS, chacun avec ses propres caractéristiques et conséquences.  Il est donc important de bien comprendre ces différentes failles pour mieux se protéger contre elles.

Voici les trois types de XSS les plus courantes, chacune avec ses propres caractéristiques :

- **XSS Stocké (Stored XSS)** : Le script malveillant est stocké sur le serveur web et exécuté à chaque fois que la page est chargée.
- **XSS Reflété (Reflected XSS)** : Le script malveillant est reflété par le serveur web vers le navigateur de l'utilisateur, souvent via des URL ou des formulaires.
- **XSS basé sur le DOM (DOM-based XSS)** : Le script malveillant modifie le DOM (Document Object Model) de la page dans le navigateur de l'utilisateur, sans interaction avec le serveur.

## L'Impact du XSS

L'impact d'une attaque XSS peut être considérable, allant du désagrément mineur à des conséquences sérieuses pour la confidentialité et la sécurité des utilisateurs. Voici quelques-uns des impacts possibles :

- **Vol d'identifiants** : Les attaquants peuvent capturer des cookies de session et autres données d'authentification pour usurper l'identité d'utilisateurs légitimes.
- **Phishing** : En modifiant l'apparence d'une page web, les attaquants peuvent créer des formulaires de phishing pour voler des informations sensibles.
- **Propagation de malwares** : Les scripts malveillants peuvent rediriger les utilisateurs vers des sites contenant des malwares.
- **Déni de service** : Les attaques XSS peuvent être utilisées pour mener des actions qui rendent une application web inutilisable pour les autres utilisateurs.

## Pourquoi le XSS est-il si Répandu ?

Le XSS est répandu principalement en raison de la complexité des applications web modernes et de la difficulté à valider et échapper correctement toutes les entrées utilisateur. De plus, l'évolution constante des technologies web introduit régulièrement de nouvelles failles que les attaquants arrivent à exploiter rapidement.

## Ressources


- [OWASP XSS](https://owasp.org/www-community/attacks/xss/) : une page de l'OWASP dédiée aux attaques XSS
- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) : une liste de bonnes pratiques pour prévenir les attaques XSS
- [OWASP DOM-based XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html) : une liste de bonnes pratiques pour prévenir les attaques XSS basées sur le DOM
