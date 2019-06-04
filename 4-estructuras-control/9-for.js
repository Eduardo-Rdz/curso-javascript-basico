var contador;

for (contador = 0; contador < 10; contador++) {
  // console.log("el valor del contador es de:", contador);
}

var numeros = [2, 4, 6, 8, 10];

for (var i = 0; i < numeros.length; i++) {
  // console.log(numeros[i]);
}

var productos = [
  { nombre: "PS4", precio: 250 },
  { nombre: "iPhone X", precio: 800 },
  { nombre: "Laptop", precio: 300 },
  { nombre: "TV", precio: 200 }
];

var productosConDescuento = [];

// buscar productos que tienen descuento y meterlos a otro arreglo
for (var i = 0; i < productos.length; i++) {
  // console.log(productos[i]);

  // regla para aplicar descuento
  if (productos[i].precio >= 300) {
    productosConDescuento.push(productos[i]);
  }
}

console.log("productos con descuento", productosConDescuento);
