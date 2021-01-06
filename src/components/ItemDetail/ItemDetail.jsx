import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Loader from '../Loader/Loader'


const ItemDetail = ({item}) => {

    // const { id, title, details, price, stock, pictureUrl } = item;
    if(item.length > 0){
        return (

            <div className="item-detail">
    
                <div className="left-container">
                    <div className="img-counter-container">
                        <img  src={item[0].pictureUrl} alt={item[0].title} />
                        <ItemCount initial={1} stock={item[0].stock}/>
                    </div>
                </div>
                <div className="right-container">
                    <div className="title-price">
                        <h4>{item[0].title}</h4>
                        <h4>${item[0].price}</h4>
                        <small>COD: {item[0].id}</small>
                    </div>

                    
                    <div className="details-container">
                        <ul>
                            <li>Marca: <span className="span">{ item[0].details.brand }</span></li>
                            <li>EAN: <span className="span">{ item[0].details.ean }</span></li>
                            <li>Modelo: <span className="span">{ item[0].details.model}</span></li>
                            <li>OS: <span className="span">{ item[0].details.os }</span></li>
                            <li>Procesador: <span className="span">{ item[0].details.processor }</span></li>
                            <li>Velocidad de procesador: <span className="span">{ item[0].details.processorSpeed }</span> </li>
                            <li>Memoria de RAM: <span className="span">{ item[0].details.ram }</span></li>
                            <li>Resolucion de pantalla: <span className="span">{ item[0].details.resolution }</span></li>
                            <li>Tamaño de la pantalla:  <span className="span"> { item[0].details.screenSize } </span></li>
                        </ul>
                    </div>
                    
                    
                </div>
                
            </div>
        ) 
    }else{
        return(
            <Loader/>
        )
    }

}

export default ItemDetail
