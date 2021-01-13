import React,{useEffect,useContext} from 'react';

//CSS particular
import './Cart.css';
//Context
import {CartContext} from '../../context/cartContext';

const Cart = () => {

    const contextCart = useContext(CartContext);
    const [ , ,cart,setCart] = contextCart;

    console.log(cart)

    return (
        <div className="cart-container">
            <ol>
            {
                cart.map(prod =>(
                    <li key={prod.item}> {prod.item} </li>
                ))
            }
            </ol>
        </div>
    )
}

export default Cart;
