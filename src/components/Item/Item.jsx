import React from 'react'

//Particular CSS
import './Item.css'

import { Link } from 'react-router-dom'

const Item = ({ id, title, price, pictureUrl }) => {


    return (
         <Link to={`/item/${id}`} >
            <div className="card-container">
                <div className="img-container">
                    <img src={pictureUrl} alt=""/>
                </div>
                <div className="info-container">
                    <p className="id-code">COD: {id}</p>
                    <p className='title'>{title}</p>
                    <p className='price'>${price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item
