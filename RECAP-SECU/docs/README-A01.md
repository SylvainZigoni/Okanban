# A01 - Contrôles d'accès défaillants

[Lien Top10](https://owasp.org/Top10/fr/A01_2021-Broken_Access_Control/)

Pour respecter le **principe de confidentialité**, nous devons faire en sorte que les utilisateurs (mal-intentionnés ou non) aient **uniquement accès aux ressources auxquelles ils doivent avoir accès.**

Un **contrôle d’accès doit donc être mis en place** sur l’ensemble des ressources à accès restreint de notre application, et **ce contrôle d’accès ne doit pas pouvoir être contourné** (le code du contrôle d’accès doit être coté serveur, par exemple).

## Recherche de faille & exploitation

Sur notre application, une page qui devrait avoir un accès restreint aux administrateurs uniquement est en fait accessible par tout le monde ! 😱

Heureusement, cette page n’est pas dans le menu de l’application, elle n’est **accessible que pour quelqu’un qui connaît son URL** … mais **est-ce suffisant comme protection ?**

:pirate_flag: **démo** :pirate_flag:

*Logiciel utilisé : DirBuster*

## Remédiation

**Nous devons impérativement ajouter un contrôle d’accès (côté serveur !) sur les ressources qui n’ont pas vocation à être publiques.**

Ce contrôle d’accès doit idéalement être géré par des **ACL centralisées** dans un seul fichier. Il faut ensuite **tester si le contrôle d’accès fonctionne bien**, et si une personne non-autorisée à accéder à certaines ressources n’y a bien effectivement pas accès.

:computer: **Pratique : ajout du contrôle d’accès sur la page concernée.** :computer:

## Navigation

:house: [Retour à l'accueil](README-index.md)

:next_track_button: [Suivant : A02](README-A02.md)
