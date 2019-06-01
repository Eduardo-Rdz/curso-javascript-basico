// operador igual que ==
var persona = {
  nombre: "Andy",
  id: "1234",
  edad: 20
};

if (persona.id == "1234") {
  console.log("1: Los ids coinciden");
} else {
  console.log("1: Los ids no coinciden");
}

if (persona.edad == "20") {
  console.log("2: Tiene 20 años");
} else {
  console.log("2: no tiene 20 años");
}

// operador igual que (tipo) ===
if (persona.edad === "20") {
  console.log("3: Tiene 20 años");
} else {
  console.log("3: no tiene 20 años");
}

// operador no igual que !=
if (persona.id != 1234) {
  console.log("4: todavia aplican descuentos para este usuario");
} else {
  console.log("4: ya no aplican descuentos para este usuario");
}

// operador no igual que (tipo) !==
if (persona.id !== 1234) {
  console.log("4: todavia aplican descuentos para este usuario");
} else {
  console.log("4: ya no aplican descuentos para este usuario");
}
