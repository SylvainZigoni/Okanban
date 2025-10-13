import express from 'express';

const port = process.env.PORT || 5050;

const app = express();

// routes pour la démo de AJAX
app.get('/', (req, res) => {
    // ? Avec ce header, on a dit au client de manière explicite que l'on autorise les requêtes sur cette route
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.json({ title: '<img src="toto" onerror="alert(\'HACKED\')">' });
});

app.get('/profile', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.json({ title: 'laurent', age: 25 });
});

app.get('/about', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.json({ title: 'a propos de nous', content: 'le contenu de la page' });
});

app.post('/message', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.json({ message: 'Votre message sera traité dans les plus brefs délais' });
});

app.listen(port, (_) => {
    console.info(`http://localhost:${port}`);
});
