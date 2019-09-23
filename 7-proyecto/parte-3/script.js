// botones articulo 1
var botonMas = document.getElementById("mas");
var botonMenos = document.getElementById("menos");
var botonAgregar = document.getElementById("agregar");

// etiquetas articulo 1
var cantidad = document.getElementById("cantidad");
var precio1 = document.getElementById("precio1");

// botones articulo 2
var botonMas2 = document.getElementById("mas2");
var botonMenos2 = document.getElementById("menos2");
var botonAgregar2 = document.getElementById("agregar2");

// etiquetas articulo 2
var cantidad2 = document.getElementById("cantidad2");
var precio2 = document.getElementById("precio2");

var etiquetaSubtotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");

var precioSubtotal = 0;
var costoEnvio = 5;

botonMas.addEventListener("click", incrementar);
botonMenos.addEventListener("click", disminuir);
botonAgregar.addEventListener("click", agregar);

botonMas2.addEventListener("click", incrementar2);
botonMenos2.addEventListener("click", disminuir2);
botonAgregar2.addEventListener("click", agregar2);

function incrementar() {
  cantidad.innerHTML++;
}

function incrementar2() {
  cantidad2.innerHTML++;
}

function disminuir() {
  if (cantidad.innerHTML > 1) {
    cantidad.innerHTML--;
  }
}

function disminuir2() {
  if (cantidad2.innerHTML > 1) {
    cantidad2.innerHTML--;
  }
}

function agregar() {
  // console.log(Number(precio1.innerHTML) * Number(cantidad.innerHTML));
  precioSubtotal += Number(precio1.innerHTML) * Number(cantidad.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;
  etiquetaTotal.innerHTML = precioSubtotal + costoEnvio;
}

function agregar2() {
  precioSubtotal += Number(precio2.innerHTML) * Number(cantidad2.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;
  etiquetaTotal.innerHTML = precioSubtotal + costoEnvio;
}
