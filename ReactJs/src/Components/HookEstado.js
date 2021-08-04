import React, { useState, useEffect } from "react"

export default function HookEstado() {

    const [stateActual, setState] = useState(true)
    const [cont, setCont] = useState(0)
    const cambioEstado = () => {
        setState(!stateActual)
        //setState((preValue) => !preValue)
        setCont(cont + 1)
    }

    useEffect(() => {
        console.log(`total ${cont}`)
    }, [cont])

    return (
        <div>
            <p>
                <h3>El estado es {stateActual ? "Está encendido" : "Está apagado"}</h3>
                <button onClick={cambioEstado}> Boton de encerder / apagar</button>
                <h3>La cantidad de clicks es: {cont}</h3>
            </p>
        </div>
    )
}