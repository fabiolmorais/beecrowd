let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let p1 = valores.shift().split(" ");
let p2 = valores.shift().split(" ");

let x1 = parseFloat(p1.shift());
let x2 = parseFloat(p2.shift());

console.log(`x1 = ${x1} e x2 = ${x2}`);

let y1 = parseFloat(p1.shift());
let y2 = parseFloat(p2.shift());

console.log(`y1 = ${y1} e y2 = ${y2}`);

let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(`${distancia.toFixed(4)}`);