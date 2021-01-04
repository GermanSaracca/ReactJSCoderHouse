import React, { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const itemPromise = new Promise((resolve,reject)=>{

        let flag = true;

        setTimeout(()=> {

            let product = 
                {
                    id: 1,
                    title: "Notebook Hp 255 I7 8gb 15'6 ",
                    details: {
                        brand: "Hp",
                        model: "6qy12lt",
                        ean: 193898707551,
                        resolution: "1366 x 768",
                        screenSize: '15.6"',
                        os: "FreeDOS",               
                        processor: "AMD",
                        processorSpeed: "3.7 GHz",
                        ram: "8 GB"
                    },
                    price: 50999,
                    stock: 9,
                    pictureUrl: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00057/1000x1000-NOT00057.jpg&h=220'

                };

            flag ? resolve(product) : reject("fallo promesa");

        }, 2000);
    });

    const [item, setItem ] = useState([]);

    useEffect(() => {

        itemPromise
        .then(item => setItem(item) )
        .catch(e => console.log(e))

    }, []);



    return (
        <>
            {
                <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailContainer
