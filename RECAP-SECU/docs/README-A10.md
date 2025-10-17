# A10 - Falsification de requête coté serveur

[Lien Top10](https://owasp.org/Top10/fr/A10_2021-Server-Side_Request_Forgery_(SSRF)/)

Nos serveurs web sont parfois à l'intérieur de réseaux comprenant d'autres machines ou services, protégés derrières des pare-feu et normalement inaccessibles depuis Internet. Les attaques SSRF ont pour objectif de permettre d'effectuer des requêtes vers ces serveurs par le biais du serveur web, accessible depuis Internet, et ainsi de contourner d'éventuels pare-feu et autres protections.

Pour s'en protéger, il faut segmenter : notre serveur web ne doit pas pouvoir communiquer avec d'autres serveurs sur le réseau de l'entreprise. Si certaines ressources internes doivent être accessibles, il faut impérativement mettre en place des règles de pare-feu & de filtrage permettant de bloquer toute requête illégitime.

## Navigation

:house: [Retour à l'accueil](README-index.md)

:previous_track_button: [Précédent : A09](README-A09.md)