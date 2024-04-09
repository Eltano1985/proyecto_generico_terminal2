const leer = require("prompt-sync")();

console.log("Ingresa tu nombre");
let NombreIngresado = leer();
console.log("Quiere que lo salude (1) o lo despida (2)");
let OpcionIngresada = leer();
if (OpcionIngresada == 1) {
    console.log("Hola", NombreIngresado);
}
else if (OpcionIngresada == 2){
    console.log("Adios", NombreIngresado);
}
else{
    console.log("la opcion no es valida");
}
