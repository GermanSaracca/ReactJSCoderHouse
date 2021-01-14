import React, { useState } from 'react';

//Particular CSS
import './ItemDetail.css';

//Components
import ItemCount from '../ItemCount/ItemCount';
import Loader from '../Loader/Loader';
import NotExists from '../NotExists/NotExists';
import FinishBuying from '../FinishBuying/FinishBuying';


const ItemDetail = ({item}) => {

    const [ bigImg, setBigImg ] = useState('');
    const [ isAdded, setIsAdded ] = useState(false);

    //Si el largo del item es distinto de 0 y a la vez es distinto de "not exist"( lo cual dice q el item no existe)
    // entonces retorno el  componente con el detalle
    if(item.length > 0 && item !== "not exist"){

        return (
            <div className="item-detail">
                <div className="left-container">
                    <div className="img-counter-container">
                        <div className="small-images-big-image-container">
                            <div className="small-images">
                                <div className="sm-img" 
                                    style={{ 
                                        backgroundImage: `url(${item[0].pictureUrl[0]})` 
                                    }}
                                    onMouseOver={ () => setBigImg({backgroundImage: `url(${item[0].pictureUrl[0] })`})}
                                >
                                </div>
                                <div className="sm-img" 
                                    style={{
                                        backgroundImage: `url(${ item[0].pictureUrl[1] !== undefined ? item[0].pictureUrl[1] : item[0].pictureUrl[0] })` 
                                    }}
                                    onMouseOver={ () => setBigImg({backgroundImage: `url(${item[0].pictureUrl[1] !== undefined ? item[0].pictureUrl[1] : item[0].pictureUrl[0] })`})}
                                >
                                </div>
                                <div className="sm-img" 
                                    style={{
                                        backgroundImage: `url(${item[0].pictureUrl[2] !== undefined ? item[0].pictureUrl[2] : item[0].pictureUrl[0] })`,
                                    }}
                                    onMouseOver={ () =>{
                                        setBigImg({backgroundImage: `url(${item[0].pictureUrl[2] !== undefined ? item[0].pictureUrl[2] : item[0].pictureUrl[0] })`});
                                    }}
                                >
                                </div>
                            </div>
                            <div className="big-image" 
                                style={bigImg !== '' ? bigImg : { backgroundImage: `url(${item[0]?.pictureUrl[0] })`} }
                                >      
                            </div>
                        </div>
                        <ItemCount isAdded={isAdded} setIsAdded={setIsAdded} initial={1} stock={item[0].stock} item={item} /> 
                        {
                            isAdded 
                                && 
                            <FinishBuying/>
                        } 
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
        
    }else if(item === "not exist"){
        return(
            <NotExists/>
        )
    }else{
        return(
            <Loader/>
        )
    }

}

export default ItemDetail
