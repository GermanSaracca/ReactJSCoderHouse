import React,{useContext,useState, useEffect} from 'react';

// Import firebase para usar la libreria de timestamp
import firebase from 'firebase/app';
import '@firebase/firestore';

//Librerias
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Firestore
import { getFirestore } from '../../firebase/firebaseConfig';

//Context
import {CartContext} from '../../context/cartContext';

//History
import { useHistory } from "react-router-dom";

//Css particular
import './BuyingForm.css';

const BuyingForm = () => {

    const [ , ,cart, setCart, , ,total, , orderId , setOrderId, itemsInLocal] = useContext(CartContext);


    const [ name, setName ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ error, setError ] = useState();
    const [ existId, setExistId ] = useState(null);
    
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    useEffect(() => toasti() , []);

    const toasti = () => {toast('Estas a solo un paso!! Completa los datos para coordinar la entrega del producto!!', {
        position: "top-left",
        autoClose: 7500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })};
    toast.configure();

    const settingOrders = (id) => {

        setOrderId(id);
        setExistId(true);
    }


    const handleOrder = (e)=> {

        e.preventDefault();
        
        let order = 
            {
                buyer: {
                    name: `${name} ${lastname}`,
                    phone: phone,
                    email: email
                },
                items: cart.map(item => ({
                    id: item.id,
                    item: item.item,
                    price: item.price,
                    qty: item.quantity
                })),
                date:  firebase.firestore.Timestamp.fromDate( new Date()) ,
                total: total
            };

        localStorage.removeItem('cart');
        setCart( itemsInLocal );
        setLoading(true)

        const db = getFirestore();
        const orders = db.collection("orders");

        orders
        .add(order)
        .then( ({ id }) =>{
            
            settingOrders(id);
             
        })
        .catch(err => {

            setError(err);
            console.log(err)
        })
        .finally(()=>{

            history.push("/");
            
        })
    };


    return (
        <div className="buy-form-container">

            <form className="form-container" >
                <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="name" type="text" className="validate" autoComplete="none" 
                    onChange={ (e)=>{ setName(e.target.value) }} />
                    <label htmlFor="name" >Nombre</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="lastname" type="text" className="validate" autoComplete="none" 
                    onChange={ (e)=>{ setLastname(e.target.value) }} />
                    <label htmlFor="lastname" >Apellido</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">phone</i>
                    <input id="telephone" type="tel" className="validate" autoComplete="none" 
                    onChange={ (e)=>{ setPhone(e.target.value) }}/>
                    <label htmlFor="telephone">Telefono/Celular</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" autoComplete="none"
                    onChange={ (e)=>{ setEmail(e.target.value) }}/>
                    <label htmlFor="email">Email</label>
                </div>
                {/* Unica forma de que los autocomplete funcionen fue agregando autoComplete = "none" a todos los inputs
                y crear un ultimo input innecesario (display: none) con autoComplete='on' */}
                <div className="input-field" style={{display: 'none'}}>
                    <i className="material-icons prefix">email</i>
                    <input id="asd" type="email" className="validate" autoComplete="on"/>
                    <label htmlFor="asd">Email</label>
                </div>

                <h5 className="total-amount">
                    Subtotal &nbsp; ${ total }
                </h5>
                <span></span>


                {
                    loading ? (
                        <button className="waves-effect btn btn-getOrder ">
                            <div className="loop">
                                <i className="material-icons">loop </i>
                            </div>
                        </button>
                    ) : (
                        <button type="submit" className= {`waves-effect btn btn-buy  `}
                            onKeyDown={handleOrder} 
                            onClick={handleOrder}>
                            Finalizar compra
                        </button>
                    )

                }

                
            </form>
        </div>
    )
}

export default BuyingForm
