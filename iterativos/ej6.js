const leer = require("prompt-sync")();
//un juego donde hay 10 intentos para adivinar el numero secreto del programa, si adivinas termina, si te quedas sin intentos el programa te avisa que perdiste

let NUMERO_SECRETO = 16

for (let contador = 0; contador < 10; contador++) {
    console.log("Ingresa el numero a adivinar");
    numeroAAdivinar = Number(leer());

    if (numeroAAdivinar == NUMERO_SECRETO) {
        console.log("Adivinaste el nuemero secreto");
        contador = 13
    } else {
        console.log("No adivinaste, segui intentando");

    }

}
