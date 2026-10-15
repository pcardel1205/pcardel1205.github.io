const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Array completo de 100 números:");
console.table(numeros);

const rangoMinimo = 40;
const rangoMaximo = 60;
const numerosFiltrados = numeros.filter(num => num >= rangoMinimo && num <= rangoMaximo);

console.log(`Valores filtrados dentro del rango [${rangoMinimo}, ${rangoMaximo}]:`);
console.table(numerosFiltrados);