const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const numbers = [1, 5, 10, 15, 65, 0, 18];

const nested = [4, 8, [34], [[[29]]], [[4]], [90], [13]];

//obtener indice de un elemento
words.indexOf(2);

//Encontrar un elemento, devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
numbers.find((valor) => valor > 16);

//Encontrar un elemento, devuelve el indice del primer elemento del array que cumple la función de prueba proporcionada,
words.findIndex((valor) => valor > 16);

//Valida si algún elemento del array cumple con la condición retornando boolean
const result = words.some((word) => word.length > 6); 

//Valida si todos los elementos del array
numbers.every((valor) => valor > 10); //retorna boolean

//Retorna un array con las posiciones dadas
numbers.slice(1,4)

//Filtrar elemento
const result = words.filter((word) => word.length > 6); //retorna las palabras

//Itera un array
const newNumbers = numbers.map((x) => {
  return x * 2;
});

//Itera el array y suma cada uno
const reduce = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

//Apalanar en diferentes niveles un array
nested.flat();
nested.flat(3);

//Recursión de un array, realiza un aplanamiento profundo de un array
const reduceArray = (val) =>
  val.reduce(
    (acc, curr) =>
      Array.isArray(curr) ? acc.concat(reduceArray(curr)) : acc.concat(curr),
    []
  );
