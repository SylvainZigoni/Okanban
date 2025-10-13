async function loadPage(event) {
    event.preventDefault();

    const endpoint = event.target.getAttribute('href');

    const response = await fetch(`http://localhost:5050${endpoint}`);

    const data = await response.json();

    //  * faille XSS : Cross Site Scripting : on conseille de ne pas utilise innerHTML mais textContent
    document.querySelector('h1').textContent = data.title;
}

async function postMessage() {
    const endpoint = '/message';

    const message = { title: 'hello', content: 'How are you' };

    const response = await fetch(`http://localhost:5050${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            credentials: 'include',
        },
        body: JSON.stringify(message),
    });

    const data = await response.json();

    //  * faille XSS : Cross Site Scripting : on conseille de ne pas utilise innerHTML mais textContent
    document.querySelector('h1').textContent = data.title;
}

document.addEventListener('DOMContentLoaded', async () => {
    const links = document.querySelectorAll('header a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', loadPage);
    }

    setTimeout(async () => {
        // * On doit faire une requête vers le serveur de données
        const response = await fetch('http://localhost:5050/');
        const data = await response.json();

        // * Faille XSS : Cross Site Scripting
        // document.querySelector('h1').innerHTML = data.title;
        document.querySelector('h1').textContent = data.title;
    }, 1000);

    setTimeout(async () => {
        await postMessage();
    }, 3000);
});
