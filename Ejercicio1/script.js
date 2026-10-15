// Declaración de variables de varios tipos
const nombre = "Carlos";
const edad = 28;
const esProgramador = true;
let perfil = { rol: "Frontend", experiencia: 3 };
let telefono = undefined;
let saldo = null;
const idUnico = Symbol("id");
const numeroGrande = 9007199254740991n;

// Mostrando el contenido y su tipo usando diferentes métodos de la consola
console.info("Iniciando la demostración de tipos de datos en JavaScript:");

console.log("Variable nombre:", nombre, "| Tipo:", typeof nombre);
console.log("Variable edad:", edad, "| Tipo:", typeof edad);

console.info("Variable esProgramador:", esProgramador, "| Tipo:", typeof esProgramador);
console.info("Variable perfil:", perfil, "| Tipo:", typeof perfil);

console.debug("Variable telefono:", telefono, "| Tipo:", typeof telefono);
console.debug("Variable saldo:", saldo, "| Tipo:", typeof saldo);

// Cambiado de console.error a console.log para evitar que se marquen en rojo
console.log("Variable idUnico:", idUnico, "| Tipo:", typeof idUnico);
console.log("Variable numeroGrande:", numeroGrande, "| Tipo:", typeof numeroGrande);