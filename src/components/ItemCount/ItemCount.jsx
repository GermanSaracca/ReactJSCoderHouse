import React, { useState } from 'react'

//Particular CSS
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {

    // En caso que no haya stock cambio el valor inicial por "Sin stock"
    if(stock === 0){ initial = "Sin stock"}

    const [ counter, setCounter ] = useState(initial);

    const removeItem = () => setCounter(counter -1);

    const addItem = () => setCounter(counter + 1);

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

    const addToCart = () => {

        if(stock > 0){
            
            let newItem = {
                name: "example",
                value: 300,
                qty: counter,
            }

            console.log(newItem)
            // let items = localCartItems();

            // items.push( newItem )

            // localStorage.setItem('cartItems',JSON.stringify(items));
        }
    }

    return (
        <>  
            <div className="item-counter">

                <div className="counter-container">

                    <button onClick = { removeItem } className="waves-effect waves-light btn counter-btn" disabled={ counter <= initial }><p>-</p></button>
                    <p className="counter-value" >{counter}</p>
                    <button onClick = { addItem } className="waves-effect waves-light btn counter-btn" disabled={ counter >= stock }><p>+</p></button>
                    
                </div>

                <button onClick={ addToCart } className="waves-effect btn">Agregar al carrito</button>

            </div>
        </>
    )
}

export default ItemCount
