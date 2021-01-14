import React,{useContext} from 'react';

//CSS particular
import './Cart.css';
//Context
import {CartContext} from '../../context/cartContext';

//Components
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const contextCart = useContext(CartContext);
    const [ , ,cart, , , ,total] = contextCart;

    console.log(cart)

    return (
        <div className="cart-container">
            <div className="cart">
                <div className="cart-columns">
                    <p>Imagen</p>
                    <p>Nombre</p>
                    <p>Cantidad</p>
                    <p>Valor unitario</p>
                    <p>Valor total</p>
                </div>
                <div className="cart-items">
                    {
                        cart.map( ({ item, quantity, price, img }) =>(
                            <CartItem key={item} item={item} quantity={quantity} price={price} img={img}   />
                        ))
                    }
                </div>
                <div className="cart-total">
                    <p className="total-amount">
                    Subtotal &nbsp;&nbsp; ${ total }
                    </p>
                    <button className= "waves-effect btn">Finalizar compra</button>

                </div>
            </div>
        </div>
    )
}

export default Cart;
