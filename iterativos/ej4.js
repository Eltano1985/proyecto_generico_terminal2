const leer = require("prompt-sync")();
//repetir el punto 2 y 3 para 5 iteraciones
let numeroIngresado = 0;
let resultadoTotal = 0;

for (let contador = 0; contador < 5; contador++) {
    console.log("Ingresa un numero");
    numeroIngresado = Number(leer());
    resultadoTotal = numeroIngresado + resultadoTotal;
    console.log("Resultado total actual", resultadoTotal);
}