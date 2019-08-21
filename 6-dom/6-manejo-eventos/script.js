var boton = document.getElementById("boton");

function saludar() {
  console.log("Hola mundo!");
}

// boton.addEventListener("click", saludar);

var esRojo = false;

function cambiarColor(e) {
  if (esRojo) {
    e.target.style.background = "green";
    esRojo = false;
  } else {
    e.target.style.background = "red";
    esRojo = true;
  }
}

// boton.addEventListener("dblclick", cambiarColor);

var body = document.body;

function agregarParrafo() {
  var parrafo = document.createElement("p");
  parrafo.innerHTML = "Parrafo";
  body.appendChild(parrafo);
}

boton.addEventListener("click", agregarParrafo);
