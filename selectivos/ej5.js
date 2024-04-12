const leer = require("prompt-sync")();
//reciba un nombre y lo salude o lo despide dependiendo del usuario
console.log("Ingrese su nombre");
let nomIngresado = leer();
console.log("Quiere que lo salude (1) o lo despida (2)");
let opcionIngresada = leer();
if (opcionIngresada === "1") {
    console.log("Hola", nomIngresado)};
if (opcionIngresada === "2") {
    console.log("Adios", nomIngresado);
}