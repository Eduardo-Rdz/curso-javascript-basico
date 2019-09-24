var articulos = [
  {
    id: "articulo-001",
    nombre: "gato hot dog",
    precio: 50,
    cover: "gato-hot-dog.png"
  },
  {
    id: "articulo-002",
    nombre: "gato hamburguesa",
    precio: 40,
    cover: "gato-hamburguesa.png"
  }
];

function crearElemento(tipo, contenido, clase, archivoImagen) {
  var elemento = document.createElement(tipo);

  if (contenido != null) {
    elemento.innerHTML = contenido;
  }
  if (clase != null) {
    elemento.classList.add(clase);
  }
  if (archivoImagen != null) {
    elemento.setAttribute("src", "assets/" + archivoImagen);
  }

  return elemento;
}

function dibujarArticulo(articulo) {
  var itemCard = crearElemento("div", null, "item-card", null);

  // agregar cover del articulo en el item card
  itemCard.appendChild(
    crearElemento("img", null, "item-cover", articulo.cover)
  );

  // agregar titulo del articulo en el item card
  itemCard.appendChild(crearElemento("h2", articulo.nombre, null, null));

  var filaPrecio = crearElemento("div", null, "fila", null);

  // agregar etiqueta precio en la fila de precio
  filaPrecio.appendChild(crearElemento("span", "precio", "subtitulo", null));

  // agregar simbolo dolar en la fila de precio
  filaPrecio.appendChild(crearElemento("span", "$", "precio", null));

  // agregar precio en la fila de precio
  filaPrecio.appendChild(
    crearElemento("span", articulo.precio, "precio", null)
  );

  // agregar fila de precio en el item card
  itemCard.appendChild(filaPrecio);

  var filaContador = crearElemento("div", null, "fila", null);

  // agregar etiqueta cantidad en la fila de contador
  filaContador.appendChild(
    crearElemento("span", "cantidad", "subtitulo", null)
  );

  var contador = crearElemento("div", null, "contador", null);

  // agregar boton menos en el contador
  contador.appendChild(crearElemento("img", null, "boton-menos", "menos.svg"));

  // agregar span en el contador
  contador.appendChild(crearElemento("span", 1, "cantidad", null));

  // agregar boton mas en el contador
  contador.appendChild(crearElemento("img", null, "boton-mas", "mas.svg"));

  filaContador.appendChild(contador);

  // agregar fila de contador en el item card
  itemCard.appendChild(filaContador);

  // agregar boton de "AGREGAR" en el item card
  itemCard.appendChild(crearElemento("div", "Agregar", "boton-agregar", null));

  var contenedorArticulos = document.getElementById("contenedor-articulos");
  contenedorArticulos.appendChild(itemCard);
}

for (let i = 0; i < articulos.length; i++) {
  dibujarArticulo(articulos[i]);
}

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
var etiquetaEnvio = document.getElementById("etiqueta-envio");
var etiquetaDescuento = document.getElementById("etiqueta-descuento");

var valorEnvio = document.getElementById("valor-envio");
var valorDescuento = document.getElementById("valor-descuento");
var agregadoArticulo1 = false;
var agregadoArticulo2 = false;
var descuento = 0;
var precioSubtotal = 0;

botonMas.addEventListener("click", incrementar);
botonMenos.addEventListener("click", disminuir);
botonAgregar.addEventListener("click", agregar);

botonMas2.addEventListener("click", incrementar2);
botonMenos2.addEventListener("click", disminuir2);
botonAgregar2.addEventListener("click", agregar2);

// condicion para envio gratis
// con una compra de mas de 100 dolares
// condicion para el descuento
// 10% de descuento con ambos articulos y mas de 500 dolares

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

function aplicarDescuentos() {
  if (precioSubtotal > 100) {
    etiquetaEnvio.style.color = "#4382FF";
    valorEnvio.innerHTML = 0;
  }

  if (agregadoArticulo1 && agregadoArticulo2 && precioSubtotal > 500) {
    etiquetaDescuento.style.color = "#4382FF";
    descuento = precioSubtotal * 0.1;
    valorDescuento.innerHTML = descuento;
  }

  etiquetaTotal.innerHTML =
    precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
}

function agregar() {
  agregadoArticulo1 = true;
  // console.log(Number(precio1.innerHTML) * Number(cantidad.innerHTML));
  precioSubtotal += Number(precio1.innerHTML) * Number(cantidad.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;

  aplicarDescuentos();
  agregarEtiquetaArticulo();
}

function agregar2() {
  agregadoArticulo2 = true;
  precioSubtotal += Number(precio2.innerHTML) * Number(cantidad2.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;

  aplicarDescuentos();
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
