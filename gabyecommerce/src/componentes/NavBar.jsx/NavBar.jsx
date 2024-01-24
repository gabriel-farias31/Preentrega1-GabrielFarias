import React from 'react'
import './NavBar.css'

const NavBar = () => {

    return (
        <>

        <h1>Peluqueria Gaby</h1>


       <ul className={`lista`} >
        <li>
            <a>INICIO</a>
        </li>
        <li>
            <a className={`loreal`}>Loreal</a>
        </li>
        <li>
            <a>Kerastase</a>
        </li>
       </ul>

        </>

    )
}

export default NavBar;