const leer = require("prompt-sync")();
//sume 3 numeros ingresados por consola donde por cada numero ingresado debe mostrar el valor del resultado actual o sea en cada iteracion
let numeroIngresado = 0;
let resultadoTotal = 0;

for (let contador = 0; contador < 3; contador++) {
    console.log("Ingresa un numero");
    numeroIngresado = Number(leer());
    resultadoTotal = numeroIngresado + resultadoTotal;
    console.log("Resultado total actual", resultadoTotal); 
}


    