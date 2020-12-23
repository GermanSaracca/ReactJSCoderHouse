import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="list-container">
                <h2 className="greeting-title">{greeting}</h2>
            </div>
        </>
    )
}

export default ItemListContainer
