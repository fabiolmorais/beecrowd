var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

let notaA = parseFloat(valores.shift());
let notaB = parseFloat(valores.shift());

let media = (notaA * 3.5 + notaB * 7.5) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);