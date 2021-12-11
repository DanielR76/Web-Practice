const API = 'https://swapi.dev/api/'
const NAME = 'people/'




function llamar(valor) {
    $.get(API + NAME + valor, { crossDomain: true }, function (data) {
        console.log('holi, ' + data.name)
    })
}

for (let i = 1; i < 50; i++) {
    llamar(i)
}

