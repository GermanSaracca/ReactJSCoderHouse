import React,{useContext} from 'react';

//CSS particular
import './Cart.css';
//Context
import {CartContext} from '../../context/cartContext';
//Routing
import { Link } from 'react-router-dom';

//Components
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const contextCart = useContext(CartContext);
    const [ , ,cart, , , ,total,deleteItem] = contextCart;


    if (cart.length !== 0) {

        return (
            <div className="cart-container">
                <div className="cart">
                    <div className="cart-columns">
                        <p></p>
                        <p>Imagen</p>
                        <p>Nombre</p>
                        <p>Cantidad</p>
                        <p>Valor unitario</p>
                        <p>Valor total</p>
                    </div>
                    <div className="cart-items">
                        {
                            cart.map( ({ item, quantity, price, img }) =>(
                                <CartItem key={item} item={item} quantity={quantity} price={price} img={img} deleteItem={deleteItem}  />
                            ))
                        }
                    </div>
                    <div className="cart-total">
                        <p className="total-amount">
                        Subtotal &nbsp;&nbsp; ${ total }
                        </p>
                        <Link to="/order" className="waves-effect btn">Finalizar compra</Link>
                    </div>
                </div>
            </div>
        )

    } else {
        return(
            <div className="cart-container-empty">
                <i className="material-icons empty-cart">shopping_cart</i>
                <h4 className="empty-cart-title">Parece que tu carrito está vacio <br/> </h4>
                <Link to="/"><button className="waves-effect waves-light btn backToLanding-btn">Volver a la tienda</button></Link> 
            </div>
        )
    }


}

export default Cart;