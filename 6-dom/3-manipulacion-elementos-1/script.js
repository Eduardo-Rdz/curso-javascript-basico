var parrafo = document.createElement("p");
parrafo.innerHTML = "hola mundo";

// si unicamente se requiere agregar el elemento en el body
// document.body.appendChild(parrafo);

var app = document.getElementById("app");

app.appendChild(parrafo);

var bloque = document.createElement("DiV");

bloque.style.width = "200px";
bloque.style.height = "200px";
bloque.style.backgroundColor = "red";

// bloque.innerHTML = "<h1>Título 1</h1>";
bloque.innerHTML = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
`;

app.appendChild(bloque);
