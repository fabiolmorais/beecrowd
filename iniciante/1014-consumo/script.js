let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let distancia = parseInt(valores.shift());
let combustivelGasto = parseFloat(valores.shift());

let consumo = distancia / combustivelGasto;

console.log(`${consumo.toFixed(3)} km/l`);