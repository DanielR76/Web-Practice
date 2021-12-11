"use strict";

const MAYOR_EDAD = 18
var datos = {
    nombre: "Daniel",
    apellido: "Rodriguez",
    edad: 23,
    profesion: "Ingeniero de Software",
    estudiando: false
}

const esMayorDeEdad = dato => dato.edad > MAYOR_EDAD ? `Mayor de edad: ${dato.edad}` : `Menor de edad: ${dato.edad}`
const estudia = ({ estudiando, nombre }) => estudiando ? `${nombre} está aprendiendo` : `${nombre} es un vago`


const sumaEdad = dato => ({
    ...dato,
    edad: dato.edad + 1
})
