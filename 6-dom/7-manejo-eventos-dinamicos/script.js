var boton = document.getElementById("boton");
var numeracion = 0;

boton.addEventListener("click", agregarBoton);

function agregarBoton() {
  var botonHijo = document.createElement("div");
  var nombreElemento = "Elemento hijo " + numeracion;

  botonHijo.innerHTML = nombreElemento;
  botonHijo.classList.add("boton-hijo");

  botonHijo.addEventListener("click", saludar.bind(null, nombreElemento));
  document.body.appendChild(botonHijo);
  numeracion++;
}

function saludar(nombre, e) {
  console.log("Hola! soy " + nombre);
  e.target.style.background = "red";
}
