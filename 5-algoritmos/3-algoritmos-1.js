function cuadrado(numero) {
  return numero * numero;
}

console.log(cuadrado(9));

var numeros = [10, 10, 10, 10, 20];

function sumarArreglo(arreglo) {
  var sumaTotal = 0;
  for (var i = 0; i < arreglo.length; i++) {
    // sumaTotal = sumaTotal + arreglo[i];
    sumaTotal += arreglo[i];
  }
  return sumaTotal;
}

console.log(sumarArreglo(numeros));

var arregloMixto = ["4", 5, 2, "6", 7];

function sumarArregloMixto(arregloMixto) {
  var sumaTotal = 0;
  for (var i = 0; i < arregloMixto.length; i++) {
    sumaTotal += Number(arregloMixto[i]);
  }
  return sumaTotal;
}

console.log("resultado de sumarArregloMixto", sumarArregloMixto(arregloMixto));
