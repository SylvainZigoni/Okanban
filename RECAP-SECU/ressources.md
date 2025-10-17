# Ressources et Références pour la Sécurité des Applications Node.js

## Documentation Officielle OWASP

- [OWASP Top 10 (2021)](https://owasp.org/Top10/) - La liste des 10 risques de sécurité les plus critiques pour les applications web
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) - Collection de bonnes pratiques pour différents aspects de la sécurité
- [OWASP Node.js Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html) - Guide spécifique pour Node.js
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/) - Risques de sécurité spécifiques aux API

## Fiches de Référence OWASP par Vulnérabilité

### A01:2021 - Broken Access Control

- [OWASP Access Control Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html)
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### A02:2021 - Cryptographic Failures

- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [OWASP TLS Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)

### A03:2021 - Injection

- [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [OWASP NoSQL Injection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/NoSQL_Database_Security_Cheat_Sheet.html)
- [OWASP OS Command Injection Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html)

### A04:2021 - Insecure Design

- [OWASP Secure Product Design Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Product_Design_Cheat_Sheet.html)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)

### A05:2021 - Security Misconfiguration

- [OWASP Configuration Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Configuration_Cheat_Sheet.html)
- [OWASP Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)

### A06:2021 - Vulnerable and Outdated Components

- [OWASP Vulnerable Dependency Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html)

### A07:2021 - Identification and Authentication Failures

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
- [OWASP Multi-Factor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html)

### A08:2021 - Software and Data Integrity Failures

- [OWASP Software Supply Chain Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html)

### A09:2021 - Security Logging and Monitoring Failures

- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

### A10:2021 - Server-Side Request Forgery

- [OWASP Server-Side Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

## Documentation Node.js et Express

- [Documentation de sécurité Node.js](https://nodejs.org/en/docs/guides/security/)
- [Meilleures pratiques de sécurité Express.js](https://expressjs.com/fr/advanced/best-practice-security.html)
- [Helmet.js](https://helmetjs.github.io/) - Middleware pour sécuriser les en-têtes HTTP

## Bibliothèques de Sécurité pour Node.js

### Authentification et Autorisation

- [Passport.js](http://www.passportjs.org/) - Middleware d'authentification pour Node.js
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Implémentation de JSON Web Tokens
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Bibliothèque pour le hachage des mots de passe
- [CASL](https://casl.js.org/) - Bibliothèque d'autorisation isomorphique
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit) - Limitation de taux pour Express

### Validation et Assainissement des Entrées

- [express-validator](https://express-validator.github.io/) - Middleware de validation pour Express
- [joi](https://joi.dev/) - Schéma de validation d'objets
- [validator.js](https://github.com/validatorjs/validator.js) - Validateurs et assainisseurs de chaînes

### Protection contre les Injections

- [knex.js](http://knexjs.org/) - Constructeur de requêtes SQL avec requêtes paramétrées
- [Sequelize](https://sequelize.org/) - ORM pour Node.js
- [Mongoose](https://mongoosejs.com/) - ODM pour MongoDB
- [DOMPurify](https://github.com/cure53/DOMPurify) - Nettoyage de HTML contre les attaques XSS

### Journalisation et Surveillance

- [Winston](https://github.com/winstonjs/winston) - Logger multi-transports
- [Morgan](https://github.com/expressjs/morgan) - Middleware de journalisation HTTP pour Express
- [Pino](https://getpino.io/) - Logger très performant

### Analyse de Sécurité

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Outil intégré pour analyser les vulnérabilités des dépendances
- [Snyk](https://snyk.io/) - Outil pour trouver et corriger les vulnérabilités
- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) - Analyse des dépendances

## Outils de Test de Sécurité

- [OWASP ZAP (Zed Attack Proxy)](https://www.zaproxy.org/) - Scanner de sécurité d'applications web
- [Burp Suite](https://portswigger.net/burp) - Plateforme de test de sécurité d'applications web
- [OWASP Amass](https://owasp.org/www-project-amass/) - Cartographie de surface d'attaque et découverte d'actifs
- [sqlmap](http://sqlmap.org/) - Outil de test d'injection SQL automatisé
- [Metasploit](https://www.metasploit.com/) - Framework de test de pénétration

## Normes et Guides

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) - Cadre pour améliorer la cybersécurité
- [NIST Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) - Recommandations pour l'authentification
- [GDPR (RGPD)](https://gdpr.eu/) - Règlement général sur la protection des données
- [PCI DSS](https://www.pcisecuritystandards.org/) - Norme de sécurité des données de l'industrie des cartes de paiement

## Plateformes d'Apprentissage et CTF

- [OWASP WebGoat](https://owasp.org/www-project-webgoat/) - Application délibérément non sécurisée pour l'apprentissage
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) - Application web moderne délibérément vulnérable
- [Hack The Box](https://www.hackthebox.eu/) - Plateforme de cybersécurité pour tester et améliorer ses compétences
- [TryHackMe](https://tryhackme.com/) - Plateforme d'apprentissage de la cybersécurité en ligne
- [Damn Vulnerable Web Application (DVWA)](http://www.dvwa.co.uk/) - Application PHP/MySQL délibérément vulnérable
- [Damn Vulnerable NodeJS Application (DVNA)](https://github.com/appsecco/dvna) - Application Node.js délibérément vulnérable

## Blogs

- [OWASP Blog](https://owasp.org/blog/)
- [Snyk Blog](https://snyk.io/blog/)
- [Node.js Security Working Group](https://github.com/nodejs/security-wg)
- [HackerOne Blog](https://www.hackerone.com/blog)
- [PortSwigger Web Security Blog](https://portswigger.net/blog)
- [Troy Hunt's Blog](https://www.troyhunt.com/)
- [Scott Helme's Blog](https://scotthelme.co.uk/)

## Forums

- [OWASP Slack](https://owasp.org/slack/invite)
- [Node.js Security Working Group](https://github.com/nodejs/security-wg)
- [Reddit r/netsec](https://www.reddit.com/r/netsec/)
- [Stack Overflow - Tag 'node.js-security'](https://stackoverflow.com/questions/tagged/node.js-security)

## Vidéos

- [OWASP DevSlop Show](https://www.youtube.com/watch?v=rAwxFw25x3E&list=PLX8Jt4Z3uYHGlIQgIpSWSaxy7I63qm4PF)
- [Web Security Academy](https://portswigger.net/web-security) par PortSwigger

## Services de Vérification de Sécurité

- [Have I Been Pwned](https://haveibeenpwned.com/) - Vérifier si vos comptes ont été compromis
- [Security Headers](https://securityheaders.com/) - Analyser les en-têtes de sécurité HTTP
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Tester la configuration SSL/TLS
- [Mozilla Observatory](https://observatory.mozilla.org/) - Scanner de sécurité web
