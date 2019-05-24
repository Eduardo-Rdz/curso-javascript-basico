// declaracion de un objeto
// nombre de la propiedad: valor de la propiedad
var goku = {
  nombre: "Goku",
  edad: 40,
  tieneHijo: true
};

console.log("1:", "Objeto:", goku);
console.log("2: es de tipo", typeof goku);

// acceder a una propiedad en especifico
console.log("3:", "Edad:", goku.edad);

// actualizar propiedad
goku.edad = 38;
console.log("4:", "edad:", goku.edad);

goku.esTerricola = false;
console.log("5: objeto con nuevas propiedades", goku);

delete goku.esTerricola;
console.log("6: objeto con menos propiedades", goku);

var gohan = {
  nombre: "Gohan",
  edad: 18
};

// objeto que contiene otro objeto como propiedad
var goku = {
  nombre: "Goku",
  edad: 40,
  hijo: gohan
};
console.log("7: objeto que contiene otro objeto", goku);

var goku = {
  nombre: "Goku",
  edad: 40,
  hijo: {
    nombre: "Gohan",
    edad: 18,
    hija: {
      nombre: "Pan"
    }
  }
};

// objetos vacios
var objetoVacio = {};
console.log("8: objeto vacio", objetoVacio);
objetoVacio.propiedad1 = "Hola mundo!";
console.log("9: objeto no vacio", objetoVacio);
