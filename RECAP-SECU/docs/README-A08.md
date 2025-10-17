# A08 - Manque d'intégrité des données & du logiciel

[Lien Top10](https://owasp.org/Top10/fr/A08_2021-Software_and_Data_Integrity_Failures/)

Cette catégorie est récente (arrivée dans le Top10 en version 2021).

Cette faille concerne les scripts récupérés depuis Internet, ou les mises à jour effectuées à l'intérieur d'une application (exemple : vous n'avez pas besoin de mettre à jour votre application Netflix - celle-ci se met à jour automatiquement sans nécessiter aucune action de la part de l'utilisateur). Il faut vérifier l'intégrité des scripts récupérés de la sorte, pour s'assurer qu'ils n'aient pas été altérés par une personne malveillante.

Il est par exemple nécessaire d'utiliser [l'attribut HTML `integrity`](https://developer.mozilla.org/fr/docs/Web/Security/Subresource_Integrity) pour vérifier que les scripts JS hébergés sur des CDNs n'aient pas été altérés.

Démo avec Jquery dans notre projet !

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A07](README-A07.md)

:next_track_button: [Suivant : A09](README-A09.md)