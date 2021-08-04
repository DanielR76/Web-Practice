"use strict";

var ejemplo = {
    nombre: "Daniel",
    apellido: "Rodriguez",
    edad: 23,
    profesion: "Ingeniero de Software"
}

function saludar({ edad, apellido }) {
    console.log(`hola a todos mi nombre es ${apellido} mi edad es ${edad}`)
}


saludar(ejemplo)

function sumaEdad(ejemplo) {
    return {
        ...ejemplo,
        edad: ejemplo.edad + 1
    }
}

//sumaEdad(ejemplo)