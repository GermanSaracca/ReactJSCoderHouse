import React,{useContext,useState}from 'react'

//Context
import {CartContext} from '../../context/cartContext';
//Librerias
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Particular CSS
import './ItemCount.css'

const ItemCount = ({ setIsAdded, initial, stock, item }) => {


    const contextCart = useContext(CartContext);
    const [ addToCart, , , , ,updateItems  ] = contextCart;

    // En caso que no haya stock cambio el valor inicial por "Sin stock"
    if(stock === 0){ initial = "Sin stock"}

    const [ counter, setCounter ] = useState(initial);

    const removeItem = () => setCounter(counter -1);
    const addItem = () => setCounter(counter + 1);

    const toasti = () => {toast(`${counter} ${counter>1 ? 'items agregados': 'item agregado'} al carrito `, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    })};

        
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
                        addToCart({item:item[0].title, quantity: counter, price: item[0].price, img: item[0].pictureUrl[0]});
                        setCounter(initial);
                        setIsAdded(true);
                        updateItems();
                        toasti();
                    }}
                    className="waves-effect btn">
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount
