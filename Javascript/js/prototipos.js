class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(respuesta) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    if(respuesta) {
        responderSaludo(this.nombre, this.apellido, false)
    }
    soyBajo() {
        console.log(`mi estatura es ${this.altura}, entonces soy bajo? ${this.altura < 1.80}`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }
    saludar(respuesta) {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (respuesta) {
            respuesta(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Holi, ${nombre} ${apellido} `)
    if (esDev) {
        console.log('chevere que seas dev')
    }
}

var Daniel = new Persona("Daniel", "Rodriguez", 1.70)
var Karen = new Persona("Karen", "Ruiz", 1.8)
var Sofia = new Desarrollador("Sofia", "Ramirez", 1.8)


Daniel.saludar(responderSaludo)
//Karen.saludar()
Sofia.saludar(responderSaludo)
