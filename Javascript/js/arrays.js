const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const numbers = [1, 5, 10, 15, 65, 0]

//obtener indice de un elemento
words.indexOf(2)

//Encontrar un elemento, devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
numbers.find(valor => valor > 16)

//Encontrar un elemento, devuelve el indice del primer elemento del array que cumple la función de prueba proporcionada,
words.findIndex(callback)

//Valida si algún elemento del array
const result = words.some(word => word.length > 6) //retorna boolean

//Valida si todos los elementos del array
numbers.every(valor => valor > 10) //retorna boolean

//Filtrar elemento
const result = words.filter(word => word.length > 6) //retorna las palabras

//Itera un array
const newNumbers = numbers.map(x => {
    return x * 2
})

//Itera el array y suma cada uno
var g = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)