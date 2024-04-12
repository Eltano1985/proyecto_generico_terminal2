const leer = require("prompt-sync")();
//pueda sumar o restar dos numeros dependiendo del usuario
console.log("Ingrese el primer numero");
let numIngresado1 = Number(leer());
console.log("Ingrese el segundo numero");
let numIngresado2 = Number(leer());
console.log("Quiere sumar (+) o restar (-)");
let opcionIngresada = leer();
if (opcionIngresada === "+") {
    console.log("El resultado es", numIngresado1 + numIngresado2);
   }   
if (opcionIngresada === "-") {
    console.log("El resultado es", numIngresado1 - numIngresado2);
}
