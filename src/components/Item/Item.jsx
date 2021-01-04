import React from 'react'
import './Item.css'

const Item = ({ id, title, price, pictureUrl }) => {

    return (
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
    )
}

export default Item
