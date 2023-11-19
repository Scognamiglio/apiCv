// Importation du module Express
const express = require('express');
const bodyParser = require('body-parser');

// Création de l'application Express
const app = express();

// Middleware pour autoriser les requêtes depuis localhost
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Remplacez le port par le port de votre application frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Security-Policy', 'default-src *');
    next();
});

// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());


app.get('/user', (req,res) => {
    const user = {
        'shortIdentity' : 'Legouas Chloé',
        'title' : 'Alternance',
        'description' : 'Charmente jeune fille',
        'photo' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwFTwtpTH90a2rDSpYlPA2eFHIGbCVTqrQvko3QnYYw&s',
        'longIdentity' : {
            'address' : 'Secret',
            'age' : '22 ans',
            'phone' : '0606060606'
        }
    }
    res.send(user);
})

// Définition de la route pour /hello
app.get('/hello', (req, res) => {
    res.send('Bonjour');
});

// Route pour gérer les requêtes POST à /message
app.post('/message', (req, res) => {
    // Récupérer le message du corps de la requête POST
    console.log(req.body);

    // Faire quelque chose avec le message (ici, simplement le renvoyer en réponse)
    res.send(req.body);
});

// Démarrage du serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
