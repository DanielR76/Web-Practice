import React from "react"

const HolaMundo = (value) => {
    const { saludarFn, user } = value
    const { nombre } = user

    return (
        <div>
            <h1>Hola a todos</h1>
            <button onClick={() => { saludarFn(nombre) }}> Hola de nuevo </button>
        </div>
    )
}

export function ChaoMundo() {
    return (
        <p>Adios mundo</p>
    )
}

export default HolaMundo