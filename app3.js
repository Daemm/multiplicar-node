//requires
//const fs = require('fs'); libreria de node
// const fs = require('express'); //libreria de terceros no propios de node.
// const fs = require('./fs'); //nuestra libreria que escribimos.

//const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo} = require('./multiplicar/multiplicar');
 

//calculadora
let base = '6x';

crearArchivo(base)
        .then((archivo) => console.log(`Se crea el archivo de ${ archivo }`))
        .catch((err) => console.log(err));