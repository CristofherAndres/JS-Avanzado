const persona = {
    nombre: 'Juan',
    edad: 35,
    profesion: 'Programador',
}

console.log(persona);


// const { nombre, edad, profesion } = persona
// console.log(nombre, edad, profesion)

const carrera = {
    nombre: 'Ingeniería en Computación',
    duracion: 10,
    profesores: ['Juan', 'Pedro', 'María', 'Luis'],
}

console.log(carrera);


/* Para acceder a los datos correctamente */
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.profesion)

/* Para acceder a los datos correctamente */
console.log(carrera.nombre)
console.log(carrera.duracion)
console.log(carrera.profesores)

/* Cambiar datos */
persona.nombre = 'Pedro'
persona.edad = 25
persona.profesion = 'Ingeniero'

console.log(persona)