var mes = "mayo";

switch (mes) {
  case "enero":
    console.log("1: usar tema para enero");
    break;
  case "febrero":
    console.log("1: usar tema para febrero");
    break;
  case "marzo":
    console.log("1: usar tema para marzo");
    break;
  case "abril":
    console.log("1: usar tema para abril");
    break;
  default:
    console.log("1: usar tema por defecto");
}

var diaSemana = 10;

switch (diaSemana) {
  case 1:
    console.log("2: hoy es lunes");
    break;
  case 2:
    console.log("2: hoy es martes");
    break;
  case 3:
    console.log("2: hoy es miercoles");
    break;
  case 4:
    console.log("2: hoy es jueves");
    break;
  default:
    console.log("2: no se que dia es hoy... :(");
}

switch (mes) {
  case "enero":
  case "febrero":
    console.log("3: usar tema 1");
    break;
  case "marzo":
  case "abril":
    console.log("3: usar tema 2");
    break;
  default:
    console.log("3: usar tema por defecto");
}
