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

// variables de la tarjeta total a pagar
var contenedorEtiquetas = document.getElementById("contenedor-etiquetas");
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
  agregarEtiquetaArticulo();
}

function agregar2() {
  precioSubtotal += Number(precio2.innerHTML) * Number(cantidad2.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;
  etiquetaTotal.innerHTML = precioSubtotal + costoEnvio;
  agregarEtiquetaArticulo2();
}

var referenciaElemento = null;
var cantidadAcumulada = 0;

function agregarEtiquetaArticulo() {
  var fila = document.createElement("div");
  fila.classList.add("fila");

  var texto = document.createElement("span");
  texto.classList.add("subtitulo");
  cantidadAcumulada += Number(cantidad.innerHTML);
  texto.innerHTML = "gato hot dog x " + cantidadAcumulada;

  fila.appendChild(texto);

  if (referenciaElemento == null) {
    contenedorEtiquetas.appendChild(fila);
  } else {
    contenedorEtiquetas.replaceChild(fila, referenciaElemento);
  }

  referenciaElemento = fila;
}

var referenciaElemento2 = null;
var cantidadAcumulada2 = 0;

function agregarEtiquetaArticulo2() {
  var fila = document.createElement("div");
  fila.classList.add("fila");

  var texto = document.createElement("span");
  texto.classList.add("subtitulo");
  cantidadAcumulada2 += Number(cantidad2.innerHTML);
  texto.innerHTML = "gato hamburguesa x " + cantidadAcumulada2;

  fila.appendChild(texto);

  if (referenciaElemento2 == null) {
    contenedorEtiquetas.appendChild(fila);
  } else {
    contenedorEtiquetas.replaceChild(fila, referenciaElemento2);
  }

  referenciaElemento2 = fila;
}
