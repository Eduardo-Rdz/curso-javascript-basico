console.log("1:", typeof 4);

console.log("2:", typeof true);

console.log("3:", typeof {});

console.log("4:", typeof []);

console.log("5:", typeof null);

console.log("6:", typeof undefined);

var persona = {
  nombre: "Walter",
  apellido: "White"
};

delete persona.apellido;

console.log("7", persona);

var heroes = ["Ironman", "Batman", "Thor"];

console.log("8:", heroes);

delete heroes[1];
console.log("9:", heroes);
