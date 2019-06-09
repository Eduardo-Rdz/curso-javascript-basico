var saludo = document.getElementById("saludo");

console.log(saludo);
console.log(typeof saludo);

saludo.style.color = "red";
// saludo.style.margin = "100px";
saludo.style.marginTop = "100px";

saludo.innerHTML = "Saludos!";

var subtitulos = document.getElementsByClassName("subtitulo");

console.log(subtitulos[1]);

var etiquetasH2 = document.getElementsByTagName("h2");

console.log(etiquetasH2);
