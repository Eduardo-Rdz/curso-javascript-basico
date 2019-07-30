// 1: insertar elementos en diferentes posiciones
var lista = document.getElementById("lista");
var elemento4 = document.createElement("li");
elemento4.innerHTML = "Elemento 4";

// lista.insertAdjacentElement("afterbegin", elemento4);
lista.insertAdjacentElement("beforeend", elemento4);

var titulo = document.createElement("h1");
titulo.innerHTML = "Titulo de prueba";

// lista.insertAdjacentElement("beforebegin", titulo);
lista.insertAdjacentElement("afterend", titulo);

var elemento5 = document.createElement("li");
elemento5.innerHTML = "Elemento 5";
lista.insertBefore(elemento5, elemento4);

// 2: borrar contenido del elemento
// lista.innerHTML = "";

// 3: remover elementos hijos
lista.removeChild(elemento5);

// 4: reemplazar elementos hijos
lista.replaceChild(elemento5, elemento4);

// 5: clonar elementos
var lista2 = lista.cloneNode(true);
console.log(lista2);
