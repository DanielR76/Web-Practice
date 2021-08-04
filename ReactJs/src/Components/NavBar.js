import React from 'react'
import iconic from '../assest/icon/iconos-nav-vector-05.svg'
import '../assest/css/ejemplo.css'


export const NavBar = () => {
    return (
        <div className="list-group">
            <a href="/">
                <img src={iconic} className="image_fluid" alt="logo" />
                <span className="clas_name">
                    aqui va el menú
                    </span>

            </a>
        </div>
    )
}

export default NavBar