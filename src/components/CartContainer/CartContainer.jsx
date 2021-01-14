import React,{useContext} from 'react';

//CSS particular
import './CartContainer.css';
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
                    <li key={prod.item}>
                        <p>{prod.item}</p>  
                        <p>{prod.price}</p>  
                        <p>{prod.quantity}</p>  
                    </li>
                ))
            }
            </ol>
        </div>
    )
}

export default Cart;
