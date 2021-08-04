import React from "react"

export default function Saludar(val) {
    console.log(`hola ${val.nombre.edad}`)
    return (
        <div>
            <h2>Hola soy {val.nombre.nombre} </h2>
        </div>
    )
} 