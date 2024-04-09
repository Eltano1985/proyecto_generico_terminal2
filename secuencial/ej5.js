const leer = require("prompt-sync")();

console.log("Ingrese el primer numero");
let numIngresado1 = Number(leer());
console.log("Ingrese el segundo numero");
let numIngresado2 = Number(leer());
console.log("La suma de los numeros ingresados es",numIngresado1 + numIngresado2 );