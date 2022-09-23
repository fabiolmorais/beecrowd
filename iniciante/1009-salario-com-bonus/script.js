var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

let nome = valores.shift();
let salarioFixo = parseFloat(valores.shift());
let vendasRealizadas = parseFloat(valores.shift());

let salarioTotal = salarioFixo + (vendasRealizadas * 0.15);

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);