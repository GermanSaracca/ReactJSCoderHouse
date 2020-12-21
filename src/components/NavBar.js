import React from 'react';

import M from 'materialize-css';//Libreria de Materialize

import './css/NavBar.css';//Archivo CSS propio

const NavBar = () => {

    //Inicializo funcionalidad de JS de Materialize para el SideNav
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });

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
                        <li><a onClick= {handleClick} href="#nav">Link</a></li>
                        <li><a onClick= {handleClick} href="#nav">Link</a></li>
                        <li><a onClick= {handleClick} href="#nav">Link</a></li>
                        <li><a onClick= {handleClick} href="#nav">Link</a></li>
                    </ul>
                </div>
            </nav>
            {/* Mismo menu pero cuando esta colapsado para mobile */}
            <ul className="sidenav" id="mobile-demo">
                <li><a onClick= {handleClick} href="#nav">Link</a></li>
                <li><a onClick= {handleClick} href="#nav">Link</a></li>
                <li><a onClick= {handleClick} href="#nav">Link</a></li>
                <li><a onClick= {handleClick} href="#nav">Link</a></li>
            </ul>
        </>
    )
};

export default NavBar;
