import React,{useContext,useState}from 'react'

//Context
import {CartContext} from '../../context/cartContext';


//Particular CSS
import './ItemCount.css'

const ItemCount = ({ isAdded, setIsAdded, initial, stock, item }) => {


    const contextCart = useContext(CartContext);
    const [ addToCart, , , , totalItems ] = contextCart;
    console.log(totalItems)


    // En caso que no haya stock cambio el valor inicial por "Sin stock"
    if(stock === 0){ initial = "Sin stock"}

    const [ counter, setCounter ] = useState(initial);

    const removeItem = () => setCounter(counter -1);
    const addItem = () => setCounter(counter + 1);

        
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
}

export default ItemCount
