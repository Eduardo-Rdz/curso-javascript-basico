var usuario = {
  nombre: "Neo",
  tieneDescuento: false
};

var montoTotal = 100;

// operador AND &&
if (usuario.tieneDescuento && montoTotal >= 200) {
  console.log("1: aplica para la promocion este usuario");
} else {
  console.log("1: no aplica para la promocion este usuario");
}

// operador OR ||
if (usuario.tieneDescuento || montoTotal >= 200) {
  console.log("2: aplica para la promocion este usuario");
} else {
  console.log("2: no aplica para la promocion este usuario");
}

// operador NOT !
var goku = {
  nombre: "Goku",
  tieneHambre: true
};

var goten = {
  nombre: "Goten",
  // logica invertida
  noTieneHambre: false
};

if (goku.tieneHambre) {
  console.log("3: goku tiene hambre");
} else {
  console.log("3: goku no tiene hambre");
}

// caso verdadero: noTieneHambre => falso
// caso falso: noTieneHambre => true
if (goten.noTieneHambre) {
  console.log("3: goten no tiene hambre");
} else {
  console.log("3: goten tiene hambre");
}

// ejercicio 1
// si compra mas de 200
// si es su primer visita

var usuario = {
  nombre: "tepichin",
  primeraVisita: true
};

var montoTotal = 150;

if (montoTotal > 200 && usuario.primeraVisita) {
  console.log("4: tiene descuento");
} else {
  console.log("4: no tiene descuento");
}

// ejercicio 2
// si compra mas o igual a 300
// o
// si NO es su primer visita

var usuario = {
  nombre: "Jon Snow",
  primeraVisita: false
};

var montoTotal = 5;

if (montoTotal >= 300 || !usuario.primeraVisita) {
  console.log("5:", usuario.nombre, "tiene descuento");
} else {
  console.log("5:", usuario.nombre, "no tiene descuento");
}
