const argv = require('yargs')
                            .option('b', {
                                alias: 'base',  //Nombre de la propiedad
                                type: 'number',  // Tipo
                                demandOption: true, // Es requerida
                                describe: 'Es la base de la tabla de multiplicar'//Descripcion
                            })
                            .option('l',{
                                alias: 'listar',
                                type: 'boolean',
                                describe: 'Muestra la tabla en consola',
                                default: false, //Valor por defecto
                            })
                            .option('h',{
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                describe: 'Hasta donde se multiplicara la base'
                            })
                            .check( (argv, option) =>{ //Para tratar errores
                                if( isNaN( argv.b ) ){ // Si el argumanto mandado como base no es un numro
                                    throw 'La base tiene que ser un número';
                                }
                                return true;
                            })
                            .argv;

module.exports = argv; // Se exporta 