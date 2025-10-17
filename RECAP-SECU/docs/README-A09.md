# A09 - Carence de contrôle & de journalisation

[Lien Top10](https://owasp.org/Top10/fr/A09_2021-Security_Logging_and_Monitoring_Failures/)

Cette catégorie nous indique qu'il faut mettre en place des mécanismes de journalisation sur nos applications : enregistrer toutes les tentatives de connexions (réussies ou échouées), toutes les actions "critiques" (ajout/modification d'un compte utilisateur par exemple).

Les journaux ne doivent pas être stockés en local, afin d'éviter qu'ils soient effacés/altérés.

Certaines actions doivent déclencher des alertes, afin de pouvoir réagir au plus vite en cas d'attaque.

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A08](README-A08.md)

:next_track_button: [Suivant : A10](README-A10.md)