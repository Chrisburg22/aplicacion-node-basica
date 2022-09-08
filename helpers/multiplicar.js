const fs = require('fs');
var colors = require('colors');


const crearArchivo = async(base=1, listar, multiplo) => {

    try{
       
        let salida = '';  

        for(let i = 1 ; i <= multiplo; i++ ){
            salida += `${ base } ${'x'.rainbow} ${ i } ${'='.rainbow} ${ base * ( i ) }\n`
        }
        
        if(listar){
            console.log(colors.rainbow("====================") );
            console.log(colors.magenta('Tablas de Multiplicar', base) );
            console.log(colors.rainbow("====================\n") );
            console.log(salida);
        }
         //    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //    if(err) throw err;
        //    console.log(`tabla-${base}.txt creado con exito!!`);
        //});
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return colors.blue(`tabla-${ base }.txt`);
    } catch (err) {
        throw err;
    }
    

}

module.exports = {
    crearArchivo
}