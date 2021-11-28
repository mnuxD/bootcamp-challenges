const prompt = require("prompt-sync")();
const numero = Math.floor(Math.random() * 5) + 1;

let entrada = Number(prompt("Adivina un numero del 1 al 5!!!: "));

while (numero !== entrada) {
  entrada = Number(prompt("Error, intenta denuevo: "));
}
console.log(`Adivinaste!!! el número era ${numero}`);
