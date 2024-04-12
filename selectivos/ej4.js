const leer = require("prompt-sync")();
//pueda multiplicar o dividir dos numeros dependiendo del usuario
console.log("Ingrese el primer numero");
let numIngresado1 = Number(leer());
console.log("Ingrese el segundo numero");
let numIngresado2 = Number(leer());
console.log("Quiere multiplicar (*) o dividir (/)");
let opcionIngresada = leer();
if (opcionIngresada === "*") {
    console.log("El resultado es", numIngresado1 * numIngresado2);
   }   
if (opcionIngresada === "/") {
    console.log("El resultado es", numIngresado1 / numIngresado2);
}