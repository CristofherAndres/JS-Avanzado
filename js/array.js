/* Ejemplo de un array */

const array = [1, 2, 3, 4, 5]

array.push(9) //Se añade al array el núm 9

console.log(array) //Se imprime el array

array.pop() //Se elimina el último elemento del array

console.log(array.length) //Se imprime el largo del array

console.log(array[0]) //Se imprime el primer elemento del array

/* Método forEach */

array.forEach(function (elemento, indice) {
    console.log(elemento, indice)
})   // Indica el elemento y la posición del array

/* Método map */
const map = array.map(function (elemento, indice) {
    return elemento * 2
}) // Cada elemento del array es multiplicado por dos


/* utilizando la función flecha */
const map2 = array.map((elemento, indice) => {
    return elemento * 2
} )

/* utilizando la función flecha de forma más reducida */
const map3 = array.map(elemento => elemento * 2)

array.forEach( valor => {
    confirm.log(valor)
} )


const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] es impreso
console.log(t2) // [1, -1, 3, 5] es impreso

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  

const t3 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t3

console.log(first, second)  // 1, 2 es impreso
console.log(rest)          // [3, 4 ,5] es impreso
