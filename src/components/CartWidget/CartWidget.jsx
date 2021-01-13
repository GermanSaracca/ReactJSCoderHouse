import React from 'react'

//Routing
import { Link } from 'react-router-dom'

//Particular CSS
import './CartWidget.css'

const CartWidget = () => {
    return (
        <>  
            <div className = "cartwidget-container">
                <Link to="/cart"> <i className="material-icons">shopping_cart</i> </Link>
            </div>
        </>
    )
}

export default CartWidget
