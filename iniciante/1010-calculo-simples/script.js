var input = require("fs").readFileSync("stdin", "utf8");
//dividir a string

var valores = input.split("\n");
//dividir a string por linhas

let linha1 = valores.shift().split(" ");
let linha2 = valores.shift().split(" ");

//passar os valores da string da linha 1 para as variaveis
let IdItem1 = parseInt(linha1.shift());
let numeroItem1 = parseInt(linha1.shift());
let valorItem1 = parseFloat(linha1.shift());

//passar os valores da string da linha 2 para as variaveis

let IdItem2 = parseInt(linha2.shift());
let numeroItem2 = parseInt(linha2.shift());
let valorItem2 = parseFloat(linha2.shift());

//resolver o problema do enunciado

let valorTotal = numeroItem1 * valorItem1 + numeroItem2 * valorItem2;

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);