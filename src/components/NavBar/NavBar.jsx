import React from 'react';
//Carrito
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';//Archivo CSS propio


const NavBar = () => {

    function handleClick() {
        alert("item clickeable");
    }


    return (
        <>  
            <nav id='nav'>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Coder-Commerce</a>
                    <a href="#nav" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a onClick= {handleClick} href="#nav">Productos</a></li>
                        <li><a onClick= {handleClick} href="#nav">Mi cuenta</a></li>
                        <li><a onClick= {handleClick} href="#nav">Nosotros</a></li>
                    </ul>
                    {/* Icono de carrito de compras */}
                    <CartWidget />
                </div>
            </nav>
            {/* Mismo menu pero cuando esta colapsado para mobile */}
            <ul className="sidenav" id="mobile-demo">
                <li><a onClick= {handleClick} href="#nav">Productos</a></li>
                <li><a onClick= {handleClick} href="#nav">Mi cuenta</a></li>
                <li><a onClick= {handleClick} href="#nav">Nosotros</a></li>
            </ul>
        </>
    )
};

export default NavBar;
