var a = 10;
console.log("1:", a);

a++;
a++;
console.log("2:", a);

++a;
console.log("3:", a);

var x = 5;
// del lado der primero: asignacion, despues: incremento
// var y = x++;

// del lado izq primero: incremento, despues: asignacion
var y = ++x;
console.log("4:", "el valor de x:", x, "el valor de y:", y);

var b = 5;
b--;
--b;
console.log("5:", b);
