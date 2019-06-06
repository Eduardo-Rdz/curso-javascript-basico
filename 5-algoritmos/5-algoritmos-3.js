// revertir un arreglo
var arreglo = [1, 2, 3, 4];
// [4, 3, 2, 1]

function revertirArreglo(arreglo) {
  var arregloInvertido = [];
  for (var i = arreglo.length - 1; i >= 0; i--) {
    arregloInvertido.push(arreglo[i]);
  }
  return arregloInvertido;
}

function revertirArreglo2(arreglo) {
  return arreglo.reverse();
}

console.log("revertirArreglo1", revertirArreglo(arreglo));
console.log("revertirArreglo2", arreglo.reverse());

var arregloBidimensional = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];

function sumarArregloBidimensional(arreglo) {
  var sumaTotal = 0;
  for (var i = 0; i < arreglo.length; i++) {
    var arregloHijo = arreglo[i];
    for (var j = 0; j < arregloHijo.length; j++) {
      sumaTotal += arregloHijo[j];
    }
  }
  return sumaTotal;
}

console.log(sumarArregloBidimensional(arregloBidimensional));
