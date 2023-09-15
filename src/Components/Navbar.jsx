import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
import { useContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const { toggleTheme } = useContextGlobal()

    return (
        <nav className='Navbar-back'>
            <div className='Navbar'>
                <h1><span>D</span>H Odonto</h1>
                {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
                <div className='Navbar-btn'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/contact">Contact</Link>
                    <Link className='link' to="/favs">Favs</Link>
                    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
                    <button onClick={toggleTheme}>🌙</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar