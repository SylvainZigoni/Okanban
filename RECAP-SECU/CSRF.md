# Les Failles CSRF

## Objectifs

- Comprendre ce qu'est une faille CSRF
- Connaître les caractéristiques des failles CSRF
- Savoir comment se protéger contre les attaques CSRF

## Une faille CSRF, c'est quoi ?

Une faille CSRF (Cross-Site Request Forgery) est une attaque qui force un utilisateur final à exécuter des actions indésirées sur une application web où il est actuellement authentifié.

## Caractéristiques des Failles CSRF

Ces attaques exploitent la confiance qu'une application web a dans l'utilisateur qui y est authentifié. Elles peuvent être menées via des emails, des messages, ou des sites web malveillants.

## L'Impact du CSRF

Les attaques CSRF peuvent compromettre des comptes utilisateurs, modifier des permissions, voler des informations, et mener à des actions non autorisées par l'utilisateur.

## Exemple d'attaque CSRF

Un attaquant pourrait créer une page web contenant un formulaire qui envoie une requête à une application web où la victime est authentifiée.  Lorsque la victime visite la page web, le formulaire est soumis automatiquement, sans qu'elle s'en rende compte.

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="https://www.example.com/api/transfer" method="post">
      <input type="hidden" name="amount" value="1000">
      <input type="hidden" name="to" value="attacker">
      <input type="submit" value="Click me!">
    </form>
    <script>
      document.forms[0].submit();
    </script>
  </body>
</html>
```

Dans cet exemple, la victime est authentifiée sur `www.example.com`, et lorsqu'elle visite la page web malveillante, le formulaire est soumis automatiquement, transférant 1000€ à l'attaquant.

## Comment se Protéger contre le CSRF ?

Il existe plusieurs moyens de se protéger contre les attaques CSRF, tels que :

- **Vérifier l'origine de la requête** : Vérifier que la requête provient de votre propre site web.
- **Utiliser des tokens CSRF** : Utiliser des tokens CSRF pour vérifier que la requête provient bien de votre site web.
- **Utiliser des en-têtes de requête** : Utiliser des en-têtes de requête pour vérifier que la requête provient de votre propre site web.

## Ressources

- [**OWASP CSRF**](https://owasp.org/www-community/attacks/csrf): Une page de l'OWASP dédiée aux attaques CSRF et à leur prévention.
- [**OWASP CSRF Prevention Cheat Sheet**](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html): Conseils pratiques pour sécuriser vos applications contre les attaques CSRF.
