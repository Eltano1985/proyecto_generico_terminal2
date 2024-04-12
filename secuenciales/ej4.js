const leer = require("prompt-sync")();
//reciba un nombre y un color favorito y para saludarlo en consola
console.log("Ingrese su nombre");
let nomIngresado = leer();
console.log("Ingrese su color favorito");
let colorFavorito = leer();
console.log("Hola", nomIngresado, "tu color favorito es", colorFavorito);



