var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

let valorA = parseInt(valores.shift());
let valorB = parseInt(valores.shift());
let valorC = parseInt(valores.shift());


let maiorAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2;
let maior = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;

console.log(`${maior} eh o maior`);