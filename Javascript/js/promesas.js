const API = 'https://rickandmortyapi.com/api/'
const NAME = 'character/'

function llamar(valor) {
    return new Promise((resolve, reject) => {
        $.get(API + NAME + valor, { crossDomain: true }, function (data) {
            console.log('hola, ' + data.name)
            resolve(data)
        }).fail(() => {
            reject(valor)
        })
    })
}



//promesas encadenadas
/* llamar(2).then((personaje) => {
    console.log(personaje.name)
    return llamar(3)
})
    .then((personaje) => {
        console.log(personaje.name)
        return llamar(4)
    })
    .catch((valor) => {
        console.log(`hubo un error ${valor}`)
    }) */


var errorCont = error => (console.log(`hubo un error ${valor}`))


/* function multiplesPromesas() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(valor => llamar(valor))
    Promise.all(promesas)
        .then(personajes => console.log(personajes))
        .catch(errorCont)
} */

//multiplesPromesas()

async function asyncAwait() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(valor => llamar(valor))
    try {
        var personaj = await Promise.all(promesas)
        console.log(personaj)
    } catch (valor) {
        errorCont(valor)
    }
}

asyncAwait()