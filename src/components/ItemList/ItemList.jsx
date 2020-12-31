import React, {useEffect, useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = () => {

    const promesa = new Promise((resolve,reject)=>{

        let flag = true;

        setTimeout(()=> {

            let productsList = [
                {
                    id: 1,
                    title: "Notebook Hp 255 I7 8gb 14'",
                    price: 50999,
                    stock: 9,
                    pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00057/1000x1000-NOT00057.jpg&h=220'
                },
                {
                    id:2,
                    title: "Notebook Gadnic Glow Pro I9x 16gb 15'",
                    price: 34999,
                    stock: 5,
                    pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00165/1000x1000-NOT00165.jpg&h=220'
                },
                {
                    id:3,
                    title: "Notebook Hp 240 I9tx 8gb 15.2' + Funda",
                    price: 53999,
                    stock: 7,
                    pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00175/1000x1000-NOT00175.jpg&h=220'
                },
                {
                    id:4,
                    title: "Notebook HP R3-2200U I7 16gb 14'",
                    price: 67999,
                    stock: 15,
                    pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00156/1000x1000-NOT00156.jpg&h=220'
                },
                {
                    id:5,
                    title: "Notebook Lenovo ideapad AMD Ryzen 7",
                    price: 128999,
                    stock: 4,
                    pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00172/1000x1000-NOT00172.jpg&w=500&q=100'
                },
        
            ];

            flag ? resolve(productsList) : reject("fallo promesa");

        }, 2000);
    });

    const [list, setList] = useState([]);

    useEffect(() => {

        promesa
        .then(items =>{ setList(items) })
        .catch(e => console.log(e))
    },[])
    



    return (
        <>
            <div className="ItemList">
                { list.map( p => <Item key={p.id} id={p.id} title={p.title} price={p.price} stock={p.stock} pictureUrl={p.pictureUrl}  />) }
            </div>
        </>
    )
}

export default ItemList
