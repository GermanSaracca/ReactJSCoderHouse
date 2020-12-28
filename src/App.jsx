//Este archivo sera el contenedor principal
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
    
//Componentes
import NavBar from  './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {

    return(
        <>
            <NavBar />
            <ItemListContainer greeting = "Bienvenido a Coder-Commerce "/>
        </>
    )
}

export default App;