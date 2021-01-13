import React from 'react'

//Components
import Item from '../Item/Item'

//Particular CSS
import './ItemList.css'

const ItemList = ({ list }) => {

    return (
        <div className="ItemList">
            { list.map( p =>
                <Item
                key={p.id}
                id={p.id} 
                title={p.title} 
                price={p.price} 
                stock={p.stock} 
                pictureUrl={p.pictureUrl}  
                />) }
        </div>
    )
}

export default ItemList
