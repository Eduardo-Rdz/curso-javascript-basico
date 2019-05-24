var animales = ["lobo", "leon", "dragon"];
console.log("1: arreglo de animales", animales);

console.log("2: imprimir un elemento en especifico", animales[0]);

// actualizar contenido
animales[0] = "ciervo";
console.log("3: contenido actualizado", animales[0]);

var numeros = [1, 2, 3];

console.log("4: arreglo de numeros", numeros);

var arregloMixto = [1, "perro", true];
console.log("5: arreglo mixto", arregloMixto);

var usuarios = [
  // objeto 1
  {
    nombre: "jorge",
    edad: 18
  },
  // objeto 2
  {
    nombre: "joel",
    edad: 26
  },
  // objeto 3
  {
    nombre: "juan",
    edad: 32
  }
];
console.log("6: arreglo de objetos", usuarios);

var usuarios = [
  // objeto 1
  {
    nombre: "jorge",
    edad: 18,
    tieneHijos: false
  },
  // objeto 2
  {},
  // objeto 3
  {
    nombre: "juan",
    edad: 32
  }
];

console.log("7: arreglo de objetos con diferentes estructuras:", usuarios);
console.log(
  "8: acceder a la propiedad nombre del elemento en la posicion 0:",
  usuarios[0].tieneHijos
);

var arregloDeArreglos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(
  "9: arreglo de arreglos o arreglo bidimensional:",
  arregloDeArreglos
);
console.log(
  "10: acceder a un elemento en especifico:",
  arregloDeArreglos[2][1]
);

console.log("11: tipo del arreglo", typeof arregloDeArreglos);
