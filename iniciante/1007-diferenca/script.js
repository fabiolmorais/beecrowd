var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

let num1 = parseInt(valores.shift());
let num2 = parseInt(valores.shift());
let num3 = parseInt(valores.shift());
let num4 = parseInt(valores.shift());

let diferenca = (num1 * num2) - (num3 * num4);

console.log(`MEDIA = ${diferenca}`);