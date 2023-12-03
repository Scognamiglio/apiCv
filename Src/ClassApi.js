const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

class ClassApi {
    constructor() {
        this.app = express();

        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*'); // permet à toutes les origines d'accéder aux ressources
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Content-Security-Policy', 'default-src \'self\' *; script-src \'self\' \'unsafe-inline\'');
            next();
        });

        this.app.use(bodyParser.json());
    }

    // EndPoint : Nom de la route // method : get/post/delete/put // fct : fonction a appelé pour cette route
    addRoute(endPoint,method,fct){
        this.app[method](`/${endPoint}`, (req,res) => {
            let responseApi = fct(req.params,req.body); // Ont appel la fonction passé dans addRoute, et ont passe le "corps" de la requète si il y'en a un
            res.send(responseApi); // L'api répond ce que lui aura renvoyé la fonction.
        })
    }

    runServ(){
        this.app.listen(port, () => {
            console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
        });
    }

}

module.exports = ClassApi; // Permet de dire que si ont require le fichier dans un javaScript, alors ça renvois ClassApi pour pouvoir l'utiliser