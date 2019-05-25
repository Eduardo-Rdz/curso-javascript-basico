// operador +
var precioManza = 5;
var precioNaranja = 4;
var precioTotal = precioManza + precioNaranja;
console.log("1: precio total:", precioTotal);
console.log("2: precio total:", precioManza + precioNaranja);

// operador -
var descuento = 3;
var precioFinal = 10;
var precioConDescuento = precioFinal - descuento;
console.log("3: precio final con descuento:", precioConDescuento);

// operador /
var premio = 1000;
var ganadores = 4;
var premioPorPersona = premio / ganadores;
console.log("4: cada ganador recibira:", premioPorPersona);

// operador *
var precioServicio = 100;
var porcentajeDescuento = 0.2;
var cantidadDescuento = precioServicio * porcentajeDescuento;
console.log("5: tienes un descuento de:", cantidadDescuento);

console.log("6:$", 100);

// concatenar palabras con el operador +
console.log("7: $" + [1, 2, 3]);

var persona = {
  nombre: "Tony",
  apellido: "Stark"
};

console.log("8: persona es: " + persona);

console.log("9: resultado: ", 1 + true + " hola mundo!");

// operadores / y * se aplican primero en el orden izquierda-derecha
// despues los operadores + y - en el orden izquierda-derecha
console.log("10:", 2 + (5 * 4) / 10 - 1);
console.log("11:", 10 - (8 / 2) * 2 + 2);
