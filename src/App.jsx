
import React, { useEffect } from 'react';

// Libreria de Materialize
import M from 'materialize-css';

//CSS core de Materialize
import 'materialize-css/dist/css/materialize.min.css';

//Componentes
import NavBar from  './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

//Router 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

    useEffect(() => { M.AutoInit() }, []);

    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={ItemListContainer}/>
                <Route path="/category/:categoryId" component={ItemListContainer}/>
                <Route path="/item/:id" component={ItemDetailContainer}/>
            </Switch>
        </Router>
    )
}

export default App;