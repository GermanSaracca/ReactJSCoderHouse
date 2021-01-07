import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader';
import './ItemListContainer.css'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {


    const {categoryId} = useParams();

    const [list, setList] = useState([]);

    useEffect(() => {
        
        const promesa = new Promise((resolve,reject)=>{

            let flag = true;
    
            setTimeout(()=> {
    
                let productsList = [
                    {
                        id: 1,
                        title: "Notebook Hp 255 I7 8gb 15'6 ",
                        category: "computacion",
                        price: 50999,
                        stock: 9,
                        pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00057/1000x1000-NOT00057.jpg&h=220'
                    },
                    {
                        id:2,
                        title: "Notebook Gadnic Glow Pro I9x 16gb 15'",
                        category: "computacion",
                        price: 34999,
                        stock: 5,
                        pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00165/1000x1000-NOT00165.jpg&h=220'
                    },
                    {
                        id:3,
                        title: "Notebook Hp 240 I9tx 8gb 15.2' + Funda",
                        category: "computacion",
                        price: 53999,
                        stock: 7,
                        pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00175/1000x1000-NOT00175.jpg&h=220'
                    },
                    {
                        id:4,
                        title: "Notebook HP R3-2200U I7 16gb 14'",
                        category: "computacion",
                        price: 67999,
                        stock: 15,
                        pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00156/1000x1000-NOT00156.jpg&h=220'
                    },
                    {
                        id:5,
                        title: "Notebook Lenovo ideapad AMD Ryzen 7",
                        category: "computacion",
                        price: 128999,
                        stock: 4,
                        pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00172/1000x1000-NOT00172.jpg&w=500&q=100'
                    },
                    {
                        id:6,
                        title: "Play Station 4",
                        category: "gaming",
                        price: 55000,
                        stock: 12,
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_649508-MLA31018432220_062019-O.webp'
                    },
                    {
                        id:7,
                        title: "Play Station 5",
                        category: "gaming",
                        price: 155000,
                        stock: 7,
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_818287-MLA44462133540_122020-O.webp'
                    },
                    {
                        id:8,
                        title: "Joystick Ps5",
                        category: "gaming",
                        price: 27500,
                        stock: 15,
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_991801-MLA44330912940_122020-O.webp'
                    },
                    {
                        id:9,
                        title: "Joystick Ps4",
                        category: "gaming",
                        price: 12500,
                        stock: 12,
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_898103-MLA32556737376_102019-O.webp'
                    },
                    {
                        id:10,
                        title: "Fifa 21 Fisico Original",
                        category: "gaming",
                        price: 24000,
                        stock: 20,
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_761792-MLA43730061265_102020-O.webp'
                    },
            
                ];
    
                flag ? resolve(productsList) : reject("fallo promesa");
    
            }, 500);
        });

        promesa
        .then(items =>{ 
            setList(items);
        })
        .catch(e => console.log(e))

    },[])
    
    
    if (list.length > 0){

        if(categoryId !== undefined){
            return(

                <div className="item-list-container">  
                {
                    <ItemList list={ list.filter(product => product.category === `${categoryId}`) } />

                }  
                </div>
            ) 
        }else{
            return(
                <div className="item-list-container">    
                    <ItemList list={list} />
                </div>
            )
        }

    }else{
        return(
            <Loader/>
        )
    }
    
}

export default ItemListContainer
