//console.log(module);
//console.log(process);
//console.log(process.argv);

const {crearArchivo} = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base).then((archivo)=>{
    console.log(`Archivo ${ archivo } creado`);
}).catch((err) =>{
    console.log(err);
});