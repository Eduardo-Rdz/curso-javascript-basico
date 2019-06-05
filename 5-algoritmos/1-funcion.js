function saludar() {
  console.log("Hola mundo!");
}

saludar();

var saludarHumano = false;

if (saludarHumano) {
  saludar();
}

function suma(a, b) {
  console.log("El resultado de la suma", a + b);
}

// function suma2() {
//   console.log("El resultado de la suma", 10 + 10);
// }

suma(3, 6);
suma(6, 9);
// suma2();

function sumaConResultado(numero1, numero2) {
  // return numero1 + numero2;
}

// var resultado = sumaConResultado(4, 4);
// console.log("resuldado", resultado);

var productos = [
  { nombre: "PS4", precio: 250 },
  { nombre: "iPhone X", precio: 800 },
  { nombre: "Laptop", precio: 300 },
  { nombre: "TV", precio: 200 }
];

for (var i = 0; i < productos.length; i++) {
  var resuldado = revisarDescuento(productos[i]);
  console.log(resuldado);
}

function revisarDescuento(producto) {
  if (producto.precio >= 300) {
    return "tienes decuento con " + producto.nombre;
  } else {
    return "no tienes decuento con " + producto.nombre;
  }
}
