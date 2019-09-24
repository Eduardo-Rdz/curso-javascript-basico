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
  },
  {
    id: "articulo-003",
    nombre: "gato taco",
    precio: 10,
    cover: "gato-taco.png"
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

  var numeroContador = crearElemento("span", 1, "cantidad", null);
  // agregar span en el contador
  contador.appendChild(numeroContador);

  var botonMenos = crearElemento("img", null, "boton-menos", "menos.svg");
  botonMenos.addEventListener("click", disminuir.bind(null, numeroContador));
  // agregar boton menos en el contador
  contador.appendChild(botonMenos);

  var botonMas = crearElemento("img", null, "boton-mas", "mas.svg");
  botonMas.addEventListener("click", incrementar.bind(null, numeroContador));
  // agregar boton mas en el contador
  contador.appendChild(botonMas);

  filaContador.appendChild(contador);

  // agregar fila de contador en el item card
  itemCard.appendChild(filaContador);

  var botonAgregar = crearElemento("div", "Agregar", "boton-agregar", null);
  botonAgregar.addEventListener(
    "click",
    agregar.bind(null, articulo, numeroContador)
  );
  // agregar boton de "AGREGAR" en el item card
  itemCard.appendChild(botonAgregar);

  var contenedorArticulos = document.getElementById("contenedor-articulos");
  contenedorArticulos.appendChild(itemCard);
}

for (let i = 0; i < articulos.length; i++) {
  dibujarArticulo(articulos[i]);
}

// variables de la tarjeta total a pagar
var contenedorEtiquetas = document.getElementById("contenedor-etiquetas");
var etiquetaSubtotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");
var etiquetaEnvio = document.getElementById("etiqueta-envio");
var etiquetaDescuento = document.getElementById("etiqueta-descuento");

var valorEnvio = document.getElementById("valor-envio");
var valorDescuento = document.getElementById("valor-descuento");
var descuento = 0;
var precioSubtotal = 0;

// condicion para envio gratis
// con una compra de mas de 100 dolares
// condicion para el descuento
// 10% de descuento con 2 o mas tipos de articulos y mas de 500 dolares

function incrementar(referenciaContador) {
  referenciaContador.innerHTML++;
}

function disminuir(referenciaContador) {
  if (referenciaContador.innerHTML > 1) {
    referenciaContador.innerHTML--;
  }
}

function agregar(articulo, referenciaContador) {
  // marcar que este tipo de articulo ya fue agregado
  articulo.agregado = true;
  precioSubtotal += articulo.precio * Number(referenciaContador.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;

  if (precioSubtotal > 100) {
    etiquetaEnvio.style.color = "#4382FF";
    valorEnvio.innerHTML = 0;
  }

  agregarEtiquetaArticulo(articulo, referenciaContador);

  var aplicarDescuento = corroborarDescuento();

  if (aplicarDescuento && precioSubtotal > 500) {
    etiquetaDescuento.style.color = "#4382FF";
    descuento = precioSubtotal * 0.1;
    valorDescuento.innerHTML = descuento;
  }

  etiquetaTotal.innerHTML =
    precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
  referenciaContador.innerHTML = 1;
}

function agregarEtiquetaArticulo(articulo, referenciaContador) {
  var fila = crearElemento("div", null, "fila", null);

  if (articulo.cantidadAcumulada == null) {
    articulo.cantidadAcumulada = Number(referenciaContador.innerHTML);
  } else {
    articulo.cantidadAcumulada += Number(referenciaContador.innerHTML);
  }

  var texto = crearElemento(
    "span",
    articulo.nombre + " X " + articulo.cantidadAcumulada,
    "subtitulo",
    null
  );

  fila.appendChild(texto);

  if (articulo.referenciaArticulo == null) {
    contenedorEtiquetas.appendChild(fila);
  } else {
    contenedorEtiquetas.replaceChild(fila, articulo.referenciaArticulo);
  }

  articulo.referenciaArticulo = fila;
}

function corroborarDescuento() {
  var cantidadTipoArticulos = 0;

  for (var i = 0; i < articulos.length; i++) {
    if (articulos[i].agregado) {
      cantidadTipoArticulos++;
    }
  }

  if (cantidadTipoArticulos >= 2) {
    return true;
  } else {
    return false;
  }
}
