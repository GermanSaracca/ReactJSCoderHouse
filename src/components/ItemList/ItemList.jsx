import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({ list }) => {

    return (
        <div className="ItemList">
            { list.map( p => <Item key={p.id} id={p.id} title={p.title} price={p.price} stock={p.stock} pictureUrl={p.pictureUrl}  />) }
        </div>
    )
}

export default ItemList
