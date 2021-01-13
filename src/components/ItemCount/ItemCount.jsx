import React,{useContext,useState, useEffect}from 'react'
//Routing
import { Link } from 'react-router-dom'
//Context
import {CartContext} from '../../context/cartContext';

//Particular CSS
import './ItemCount.css'

const ItemCount = ({ isAdded, setIsAdded, initial, stock, item }) => {


    const contextCart = useContext(CartContext);
    const [ addToCart, isInCart ] = contextCart;

    //Utlizo un useEffect para una vez renderizado el componente principal chequear si el producto ya esta en el carrito
    //Si ya lo esta entonces quito el boton de AGREGAR AL CARRITO por el de TERMINAR COMPRA
    //Aun por mas que el cartContext ya no permita duplicados.
    useEffect(() => {

        const isIn = isInCart(item[0].title);

        isIn && setIsAdded(true);

    })


    // En caso que no haya stock cambio el valor inicial por "Sin stock"
    if(stock === 0){ initial = "Sin stock"}

    const [ counter, setCounter ] = useState(initial);

    const removeItem = () => setCounter(counter -1);
    const addItem = () => setCounter(counter + 1);


    //Si ya se presiono el boton de "AGREGAR AL CARRITO" el state isAdded va a ser true
    if ( isAdded === false ){
        
        return (
            <>  
                <div className="item-counter">
    
                    <div className="counter-container">
    
                        <button onClick = { removeItem } className="waves-effect waves-light btn counter-btn" disabled={ counter <= initial }><p>-</p></button>
                        <p className="counter-value" >{counter}</p>
                        <button onClick = { addItem } className="waves-effect waves-light btn counter-btn" disabled={ counter >= stock }><p>+</p></button>
                        
                    </div>
    
                    <button 
                        onClick={ ()=>{
                            addToCart({item:item[0].title, quantity: counter, price: item[0].price});
                            setIsAdded(true);
                        }}
                        className="waves-effect btn">
                        Agregar al carrito
                    </button>
                </div>
            </>
        )

    } else if ( isAdded === true  ) {

        return(
            <>  
            <div className="go-cart">
                <Link to="/cart" 
                    className="waves-effect btn">
                    Terminar compra
                    <i className="material-icons cart">shopping_cart</i>
                </Link>
            </div>
        </>
        )
    }

}

export default ItemCount
