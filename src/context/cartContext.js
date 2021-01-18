import React,{useState,createContext,useEffect} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const itemsInLocal = () => {

        if (localStorage.getItem('cart') !== null) {

            return JSON.parse(localStorage.getItem('cart'))
        }else {
            return [];
        }
    };

    const [cart,setCart] = useState(  itemsInLocal  );
    const [items,setItems] = useState(0);
    const [total,setTotal] = useState(0);


    useEffect(() => {
        updateItems();
        localStorage.setItem('cart',JSON.stringify(cart));
        totalGral();
    });


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
                    price: obj.price,
                    img: obj.img
                }
            );
        
        }else{
            setCart([
                ...cart,
                {
                    item : obj.item,
                    quantity: obj.quantity,
                    price: obj.price,
                    img: obj.img
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

    const updateItems = ()=>{
        let total = 0;
        cart.map(item => total = total + item.quantity);
        setItems(total);
    };
    
    const totalGral = () => {
        let sumalize = 0;

        for(let i = 0; i< cart.length; i++){
          sumalize = sumalize + (cart[i].price * cart[i].quantity);
        }
        setTotal(sumalize);
    };
    
    const deleteItem = (itemName)=> {
        
        const indexItemToDelete = cart.findIndex(product => product.item === itemName);
        cart.splice(indexItemToDelete,1);
        

        let localItems = JSON.parse(localStorage.getItem('cart'));
        localItems.splice(indexItemToDelete,1);

        localStorage.setItem('cart',JSON.stringify(localItems));

        setCart(localItems);

    }
    
    return(
        <CartContext.Provider value={[ addToCart, isInCart, cart, setCart, items ,updateItems,total, deleteItem ]}>
            {children}
        </CartContext.Provider>
    )
}




