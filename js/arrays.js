const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//obtener indice de un elemento
words.indexOf()

//Encontrar un elemento
words.find(callback)
words.findIndex(callback)

//Algún elemnto
words.some(callback)

//Todos los elementos
words.every(callback)

//Filtrar elemento
const result = words.filter(word => word.length > 6);