const leer = require("prompt-sync")();
//reciba 2 numeros y muestre la suma por consola
console.log("Ingrese el primer numero");
let numIngresado1 = Number (leer());
console.log("Ingrese el segundo numero");
let numIngresado2 = Number (leer());
console.log("La suma de los dos numeros es", numIngresado1 + numIngresado2);
