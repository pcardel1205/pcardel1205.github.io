const persona = {
    nombre: "Alejandro",
    edad: 25,
    esEstudiante: true,
    telefono: undefined,
    pareja: null,
    idUnico: Symbol("identificador"),
    codigoSeguridad: 9007199254740991n,
    hobbies: ["programar", "fotografía", "videojuegos"],
    direccion: {
        calle: "Calle Mayor",
        numero: 123,
        ciudad: "Madrid"
    }
};

console.log("Mostrando el objeto persona con console.log:");
console.log(persona);

console.log("Mostrando el objeto persona con console.table:");
console.table(persona);