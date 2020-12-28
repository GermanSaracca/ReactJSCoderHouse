import React from 'react'
import { FaRegSmileWink } from "react-icons/fa"
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    const onAdd = (counter)=> {

        console.log(counter)
    }

    return (
        <>
            <div className="list-container">
                <h1 className="greeting-title">{greeting}<FaRegSmileWink/></h1>

                {/* Solo temporalmente incluyo el counter aca para probarlo */}
                <ItemCount initial={1} stock={8} />

            </div>
        </>
    )
}

export default ItemListContainer
