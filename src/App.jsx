
import React, { useEffect, useState} from 'react';

// Libreria de Materialize
import M from 'materialize-css';

//CSS core de Materialize
import 'materialize-css/dist/css/materialize.min.css';

//Componentes
import NavBar from  './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart';
import BuyingForm from './components/BuyingForm/BuyingForm.jsx';
import MyOrders from './components/MyOrders/MyOrders.jsx';

//Librerias
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Context
import {CartProvider} from './context/cartContext';

//Router 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Css particular
import './components/assets/styles/app.css'



const App = () => {

    //State para controlar el toastify de bienvenida, una vez que entra el usuario no se mostrara si recarga la pagina
    const [ justEntered, setJustEntered ] = useState(localStorage.getItem('justEntered'));

    //Inicializo funcionalidades de materialize e invoco el toast de bienvenida
    useEffect(() => {

        M.AutoInit();
        
        !justEntered && toasti();
        localStorage.setItem('justEntered', true);
        setJustEntered(false);

    }, []);

    const toasti = () => {toast('Bienvenido a CoderCommerce!! Sitio realizado en ReactJS perteneciente al proyecto integrador de CoderHouse', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })};
    toast.configure();



    return(
        <Router>
            <CartProvider>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={ItemListContainer}/>
                    <Route path="/categories/:categoryId" component={ItemListContainer}/>
                    <Route path="/item/:id" component={ItemDetailContainer}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/order" component={BuyingForm}/>
                    <Route path="/my-orders" component={MyOrders}/>
                </Switch>
            </CartProvider>
        </Router>
    ) 

}

export default App;