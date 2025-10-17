# A04 - Conception non sécurisée

[Lien Top10](https://owasp.org/Top10/fr/A04_2021-Insecure_Design/)

OWASP différencie une conception non sécurisée d'une implémentation non sécurisée. L'idée étant que la conception peut être sécurisée mais son implémentation non (corriger une implémentation non sécurisée, c'est ce qu'on a vu sur les points précédents).

Les exemples proposés sur la page du Top10 permettent de bien comprendre ce qui relève d'une conception non sécurisée :

- l'utilisation de questions secrêtes pour récupérer un mot de passe perdu : c'est une façon de faire qui doit être bannie de nos pratiques de développement, il est en effet trop simple pour un individu mal-intentionné de récupérer des informations sur un utilisateur pour répondre à ces questions.
- une réduction qui serait appliquée sur des réservations de place de cinéma sans demander d'accompte : quelqu'un pourrait potentiellement réserver un grand nombre de places dans le seul objectif de faire perdre des revenus au cinéma.

Cette menace est particulièrement dure à contrer, puisqu'elle implique de devoir penser à tous les cas de figure possibles, et ce non pas au niveau de notre code, mais dès la phase de recueil du besoin / rédaction des users stories.

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A03](README-A03.md)

:next_track_button: [Suivant : A05](README-A05.md)
