var link = document.getElementById("link");

// verificar si existe el atributo
if (link.hasAttribute("href")) {
  // obtener valor del atributo
  console.log("1: valor del atributo", link.getAttribute("href"));
}

// agregar atributo con valor
link.setAttribute("class", "verde");

console.log("2: enlace", link);
console.log("3: atributos", link.attributes);

// eliminar atributo
link.removeAttribute("class");
console.log("4: atributos", link.attributes);

// control de clases
link.classList.add("rojo");
link.classList.add("roboto");
console.log("5: clases", link.classList);

link.classList.remove("roboto");
console.log("6: clases", link.classList);

if (link.classList.contains("rojo")) {
  console.log("7: contiene la clase rojo");
} else {
  console.log("7: no contiene la clase rojo");
}
