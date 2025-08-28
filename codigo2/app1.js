// TABLAS DE VERDAD OR Y AND
console.log("TABLA OR");
var logica = 10 > 20 || 20 == 10; // 0 0 0
console.log(logica);
var logica = 10 > 20 || 20 == 20; // 0 1 1
console.log(logica);
var logica = 10 < 20 || 20 == 10; // 1 0 1
console.log(logica);
var logica = 10 < 20 || 20 == 20; // 1 1 1
console.log(logica);

console.log("TABLA AND");
var logica = 10 > 20 && 20 == 10; // 0 0 0
console.log(logica);
var logica = 10 > 20 && 20 == 20; // 0 1 0
console.log(logica);
var logica = 10 < 20 && 20 == 10; // 1 0 0
console.log(logica);
var logica = 10 < 20 && 20 == 20; // 1 1 1
console.log(logica);