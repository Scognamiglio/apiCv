// Importation du module Express
const ClassApi = require('./Src/ClassApi');

myApi = new ClassApi()

function getUser(param,payload){
    console.log(param)
    user = {
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

    return user;
}


myApi.addRoute('user/:userId','get',getUser); //:userId dit que ce qui va suivre user/ serra un paramètre dynamique et donc n'importe quel valeur


myApi.runServ()