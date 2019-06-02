var compraTotal = 90;
var descuento = 0;

// ofrecer 20% descuento si la compra es mayor o igual que 200
// ofrecer 10% descuento si la compra es menor que 200 pero mayor o igual que 100
if (compraTotal >= 200) {
  console.log("1: tienes un descuento de 20%");
  descuento = 0.2;
} else if (compraTotal >= 100) {
  console.log("1: tienes un descuento de 10%");
  descuento = 0.1;
} else {
  console.log("1: no tienes descuento");
}

console.log("2: total a pagar:", compraTotal - compraTotal * descuento);

var mes = "mayo";

if (mes === "enero") {
  console.log("3: usar tema de enero");
} else if (mes === "febrero") {
  console.log("3: usar tema de febrero");
} else if (mes === "marzo") {
  console.log("3: usar tema de marzo");
} else {
  console.log("3: usar tema default");
}
