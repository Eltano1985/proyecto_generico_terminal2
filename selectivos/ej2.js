const leer = require("prompt-sync")();
//reciba una palabra y verifique si es en el programa o no
const PALABRA_SECRETA = "Hola"
console.log("Adivina la palabra secreta");
let palabraIngresada = leer();
;
if (palabraIngresada === PALABRA_SECRETA ) {
    console.log("Adivinaste la palabra");
} else {
    console.log("No adivinaste");
}