// boolean a number
var booleana = true;
console.log("1: Es de tipo: ", typeof Number(booleana));
console.log("2: Valor: ", Number(booleana));

// boolean a string
console.log("3: Es de tipo: ", typeof String(booleana));
console.log("4: Valor: ", String(booleana));

// todo lo demas a boolean
console.log("5: false: ", Boolean(""));
console.log("6: false:", Boolean(0));
console.log("7: false:", Boolean(null));
console.log("8: false:", Boolean(undefined));
console.log("9: false:", Boolean(NaN));
console.log("10: true:", Boolean("hola"));
console.log("11: true:", Boolean({ nombre: "Juan" }));
console.log("12: true:", Boolean([1, 2, 3]));
