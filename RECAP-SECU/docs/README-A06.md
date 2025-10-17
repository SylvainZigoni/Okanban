# A06 - Composants vulnérables/obsolètes

[Lien Top10](https://owasp.org/Top10/fr/A06_2021-Vulnerable_and_Outdated_Components/)

Cette catégorie est assez claire : il faut faire attention à **ne pas utiliser de composants** (logiciels, bibliothèques, frameworks, etc.) **vulnérables** (pour lesquels des failles sont connues, exemple : Log4j) **ou obsolètes** (exemple : vieilles versions de PHP, Symfony, NodeJS etc.).

Pour nous aider à vérifier les dépendances utilisées par notre application, il existe différents outils. Par exemple, OWASP met à disposition [dependency check](https://owasp.org/www-project-dependency-check/).

Ces outils s'appuient en général sur des listes de composants connus pour être vulnérables, notamment la liste [OSS Index](https://ossindex.sonatype.org/) fournie par Sonatype. On peut chercher manuellement sur cette liste les composants utilisés par notre appli, mais le plus simple est quand même d'utiliser un outil qui va le faire à notre place !

:bulb: Pour avoir plus d'informations sur l'index OSS, il faut créer un compte sur la plateforme.

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A05](README-A05.md)

:next_track_button: [Suivant : A07](README-A07.md)
