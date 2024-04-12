const leer = require("prompt-sync")();
console.log("Ingresa un numero");
let numIngresado = Number(leer());
if (numIngresado > 0 ) {
    console.log("El numero ingresado es positivo");
}else if (numIngresado === 0) {
    console.log("El numero ingresado es un numero magico");
} else {
    console.log("El numero ingresado es negativo");
}
