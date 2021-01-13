import React,{useState,createContext} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([]);

    const addToCart = (obj) => {

        // Primero busco si ya existe dentro del array del state Cart un objeto que tenga
        // el mismo nombre que el que quiero agregar al carrito, si no existe ahi si lo agrego.
        const duplicate = cart.find(product => product.item === obj.item);

        if(duplicate !== undefined){
            setCart(cart)
        
        }else{
            setCart([
                ...cart,
                {
                    item : obj.item,
                    quantity: obj.quantity,
                    price: obj.price
                }
            ]);
        }
    };
    const isInCart = (itemName)=> {
        const isIn = cart.find(product => product.item === itemName);
        if(isIn !== undefined){
            return true;
        } else {
            return false;
        }
    } 


    return(
        <CartContext.Provider value={[ addToCart, isInCart, cart, setCart ]}>
            {children}
        </CartContext.Provider>
    )
}




