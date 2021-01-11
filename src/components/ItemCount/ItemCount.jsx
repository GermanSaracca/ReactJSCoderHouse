import React, { useState } from 'react'
//Routing
import { Link } from 'react-router-dom'

//Particular CSS
import './ItemCount.css'

const ItemCount = ({ add, setAdd, initial, stock }) => {

    // En caso que no haya stock cambio el valor inicial por "Sin stock"
    if(stock === 0){ initial = "Sin stock"}

    const [ counter, setCounter ] = useState(initial);

    const removeItem = () => setCounter(counter -1);
    const addItem = () => setCounter(counter + 1);

    const onAdd = () => {
        setAdd(counter)
    }

    console.log(add)
    //Si ya se presiono el boton de "AGREGAR AL CARRITO" por lo tanto el state add ya es distinto de undefined
    if ( add === undefined ){
        
        return (
            <>  
                <div className="item-counter">
    
                    <div className="counter-container">
    
                        <button onClick = { removeItem } className="waves-effect waves-light btn counter-btn" disabled={ counter <= initial }><p>-</p></button>
                        <p className="counter-value" >{counter}</p>
                        <button onClick = { addItem } className="waves-effect waves-light btn counter-btn" disabled={ counter >= stock }><p>+</p></button>
                        
                    </div>
    
                    <button onClick={ onAdd } className="waves-effect btn">Agregar al carrito</button>
                </div>
            </>
        )

    } else {

        return(
            <>  
            <div className="go-cart">
                <Link to="/cart" className="waves-effect btn">
                    Terminar compra<i className="material-icons cart">shopping_cart</i>
                </Link>
            </div>
        </>
        )
    }

}

export default ItemCount

//Funcion que devuelve los Items cargados al carrito guardados en localstorage
// let localCartItems = () => {
//     let cartItems;
//     if(localStorage.getItem('cartItems') === null){
//         cartItems = [];
//     } else {
//         cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     }
//     return cartItems;
// }

// let items = localCartItems();
// items.push( newItem )
// localStorage.setItem('cartItems',JSON.stringify(items));


    // const addToCart = () => {

    //     if(stock > 0){
            
    //         let newItem = {
    //             name: "example",
    //             value: 300,
    //             qty: counter,
    //         }
    //         console.log(newItem)
    //     }
    // }