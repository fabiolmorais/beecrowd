var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

let raio = parseFloat(valores);
let pi = 3.14159;


let volume = (4.0 / 3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);