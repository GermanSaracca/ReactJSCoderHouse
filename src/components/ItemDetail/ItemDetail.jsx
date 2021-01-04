import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

    const { id, title, details, price, stock, pictureUrl } = item;

   
    return (
        <div className="item-detail">

            <div className="left-container">
                <div className="img-counter-container">
                    <img  src={pictureUrl} alt={title} />
                    <ItemCount initial={1} stock={stock}/>
                </div>
            </div>
            <div className="right-container">
                <p>{title}</p>
                <p>${price}</p>
                <small>COD: {id}</small>
                
                <div className="details-container">
                    <ul>
                        <li>Marca: <span>{ details?.brand }</span></li>
                        <li>EAN: <span>{ details?.ean }</span></li>
                        <li>Modelo: <span>{ details?.model}</span></li>
                        <li>OS: <span>{ details?.os }</span></li>
                        <li>Procesador: <span>{ details?.processor }</span></li>
                        <li>Velocidad de procesador: <span>{ details?.processorSpeed }</span> </li>
                        <li>Memoria de RAM: <span>{ details?.ram }</span></li>
                        <li>Resolucion de pantalla: <span>{ details?.resolution }</span></li>
                        <li>Tamaño de la pantalla:  <span> { details?.screenSize } </span></li>
                    </ul>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default ItemDetail
