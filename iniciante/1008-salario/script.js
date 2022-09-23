var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

let number = parseInt(valores.shift());
let horasTrabalhadas = parseInt(valores.shift());
let valorHora = parseFloat(valores.shift());

let salario = horasTrabalhadas * valorHora;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);