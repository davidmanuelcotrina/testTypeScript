/*
function greet(name : string | number){
    console.log(`hello , my name is ${name} !!`);
}

greet(1);
*/


function validar(posicion: {latitud: number, longitud?: number }):void{
    console.log(`LATITUD ES ${posicion.latitud} , LONGITUD ES ${posicion.longitud}`);
}

validar({latitud: 100})




