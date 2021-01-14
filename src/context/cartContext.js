import React,{useState,createContext} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([]);

    const addToCart = (obj) => {

        // Primero busco si ya existe dentro del array del state Cart un objeto que tenga
        // el mismo nombre que el que quiero agregar al carrito, si no existe ahi si lo agrego.
        const duplicate = cart.find(product => product.item === obj.item);

        if(duplicate !== undefined){
            
            const indexOfDuplicate = cart.findIndex(product => product.item === obj.item);
            

            cart.splice(indexOfDuplicate, 1,
                {
                    item : obj.item,
                    quantity: obj.quantity + duplicate.quantity,
                    price: obj.price
                }
            )


        
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
    };
    const totalItems = cart.length;


    return(
        <CartContext.Provider value={[ addToCart, isInCart, cart, setCart, totalItems ]}>
            {children}
        </CartContext.Provider>
    )
}




