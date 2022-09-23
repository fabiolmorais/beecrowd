var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

let pi = 3.14159;
let valorA = parseFloat(valores.shift());
let valorB = parseFloat(valores.shift());
let valorC = parseFloat(valores.shift());

let triangulo = (valorA * valorC) / 2;
let circulo = pi * Math.pow(valorC, 2);
let trapezio = ((valorA + valorB) * valorC) / 2;
let quadrado = Math.pow(valorB, 2);
let retangulo = valorA * valorB;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);