// IMPORTACIONES
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
require('colors');

console.clear();
console.log( argv );

crearArchivo( argv.b, argv.l, argv.h )
            .then( archivo => console.log(archivo.rainbow,'creado') )
            .catch( err => console.log(err) ); 