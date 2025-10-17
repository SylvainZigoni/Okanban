# Les Injections SQL

## Objectifs

- Comprendre ce qu'est une injection SQL
- Connaître les différents types d'injections SQL
- Savoir comment se protéger contre les injections SQL

## Une injection SQL, c'est quoi ?

Une injection SQL est une vulnérabilité de sécurité permettant à un attaquant d'exécuter des requêtes SQL arbitraires dans la base de données d'une application web, ce qui peut compromettre l'intégrité de la base de données et mener au vol de données.

## Types d'Injections SQL

- **Injections SQL basées sur l'erreur** : Révèlent des erreurs de la base de données pour découvrir sa structure.
- **Injections SQL aveugles (Blind SQL Injection)** : L'attaquant envoie des requêtes et observe le comportement de l'application pour en déduire des informations.
- **Boolean-based** : L'attaquant envoie une requête SQL qui retournera un résultat vrai ou faux, changeant le contenu de la réponse web en fonction.
- **Time-based** : L'attaquant déduit l'information en observant le temps de réponse de l'application.
- **Injections SQL basées sur Union** : Utilisent l'opération UNION SQL pour récupérer des données de différentes tables de la base de données.

## L'Impact des Injections SQL

Les injections SQL peuvent mener à la divulgation d'informations confidentielles, la perte de données, ou même un contrôle total sur la base de données affectée.

## Pourquoi les Injections SQL sont-elles si Répandues ?

La principale cause est le manque de validation et de désinfection des entrées utilisateur par les applications, permettant ainsi l'insertion de requêtes SQL malveillantes. En utilisant des requêtes paramétrées ou des ORM, il est possible de réduire considérablement le risque d'injections SQL.

## Ressources

- [**OWASP SQL Injection**](https://owasp.org/www-community/attacks/SQL_Injection): Guide complet sur les injections SQL et leur prévention.
- [**OWASP SQL Injection Prevention Cheat Sheet**](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html): Conseils pratiques pour sécuriser vos applications contre les injections SQL.
