/* Función fecla */

const suma = (n1,n2) => {
    return n1 + n2
}

/* Llamar a la función */

const resultado = suma(5,8)
console.log(resultado)

/* Función fecla con un solo parámetro */

const cuadrado = n => {
    return n * n
}
/* Llamar a la función */
const resultado1 = cuadrado(5)
console.log(resultado1)


/* Función flecha con un solo parámetro y abreviada*/
const cuadrado2 = (n) => n * n

/* Llamar a la función */
const resultado2 = cuadrado2(5)
console.log(resultado2)


/* Aprovechando la función map */
const numeros = [1,2,3,4,5]
const cuadrados = numeros.map(n => n * n)
console.log(cuadrados)
