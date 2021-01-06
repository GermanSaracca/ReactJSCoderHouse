import React from 'react';
//Carrito
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';//Archivo CSS propio

import {NavLink} from 'react-router-dom'


const NavBar = () => {


    return (
        <>  
            <nav id='nav'>
                <div className="nav-wrapper">
                    {/* El atributo exact hace que el router busque exactamente la ruta / y no todas las q empiezen con / */}
                    <NavLink to="/" exact className="brand-logo">Coder-Commerce</NavLink>
                    <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/category/computacion" className="navlink"> Computacion </NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/gaming" className="navlink"> Gaming </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className="navlink"> Nosotros </NavLink>
                        </li>
                    </ul>
                    {/* Icono de carrito de compras */}
                    <CartWidget />
                </div>
            </nav>
            {/* Mismo menu pero cuando esta colapsado para mobile */}
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <NavLink to="/" className="navlink"> Computacion </NavLink>
                </li>
                <li>
                    <NavLink to="/micuenta" className="navlink"> Gaming </NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className="navlink"> Nosotros </NavLink>
                </li>
            </ul>
        </>
    )
};

export default NavBar;
