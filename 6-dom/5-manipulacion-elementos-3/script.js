var lista1 = document.getElementById("lista1");

var titulo1 = lista1.previousElementSibling;

console.log(titulo1);

var titulo2 = lista1.nextElementSibling;
console.log(titulo2);

var primerHijo = lista1.firstElementChild;
primerHijo.style.color = "red";

var ultimoHijo = lista1.lastElementChild;
ultimoHijo.style.color = "blue";

var hijos = lista2.children;
console.log(hijos);

for (var i = 0; i < hijos.length; i++) {
  var hijo = hijos[i];
  console.log(hijo);
  hijo.style.color = "green";
}
