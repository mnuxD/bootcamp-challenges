const prompt = require("prompt-sync")();

console.log("********************************************************");
console.log("Transformador de la lista: [1,2,3,4,5,6] por consola");
console.log("********************************************************\n");
console.log("Operaciones\n 1. Duplicar\n 2. Imprimir");

const lista = [1, 2, 3, 4, 5, 6];

let opcion = Number(prompt("Ingrese su opción: "));
while (!(opcion === 1 || opcion === 2)) {
  opcion = Number(prompt("Opción invalida, intente nuevamente: "));
}

if (opcion === 1) console.log(lista.map((n) => n * 2));
else if (opcion === 2) console.log(lista);
console.clear();
