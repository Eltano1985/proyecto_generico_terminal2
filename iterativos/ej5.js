const leer = require("prompt-sync")();
//similar al punto 3 agregando la posibilidad de sumar o restar segun lo decida el usuario
let numeroIngresado = 0;
let resultadoTotal = 0;

for (let contador = 0; contador < 3; contador++) {
    console.log("Ingresa un numero");
    numeroIngresado = Number(leer());
    console.log();
    console.log("Quiere sumar (+) o restar (-)");
    opcionIngresada = leer();
    if (opcionIngresada == "+") {
        resultadoTotal = numeroIngresado + resultadoTotal;
        console.log("El resultado total es", resultadoTotal);
        
    }




     
}