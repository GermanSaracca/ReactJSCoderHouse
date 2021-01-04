//Este archivo sera el contenedor principal
import React, { useEffect } from 'react';

// Libreria de Materialize
import M from 'materialize-css';

import 'materialize-css/dist/css/materialize.min.css';

//Componentes
import NavBar from  './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';


const App = () => {

    useEffect(() => { M.AutoInit() }, []);

    return(
        <>
            <NavBar />
            <ItemListContainer />
            <ItemDetailContainer />
        </>
    )
}

export default App;