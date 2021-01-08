import React, { useEffect, useState} from 'react'

//Components
import ItemDetail from '../ItemDetail/ItemDetail';

//Hooks
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem ] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        //isMounted variable para evitar error de memoryLeaks
        let isMounted = true;

        const itemPromise = new Promise((resolve,reject)=>{

            let flag = true;
    
            setTimeout(()=> {
    
                let products = [
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
                        pictureUrl: [
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00057/1000x1000-NOT00057.jpg&h=220',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00175/1200x900-NOT00175-2.jpg&w=500&q=100',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00175/1200x900-NOT00175-4.jpg&w=500&q=100'
                        ]
    
                    },
                    {
                        id: 2,
                        title: "Notebook Gadnic Glow Pro I9x 16gb 15' ",
                        details: {
                            brand: "Gadnic",
                            model: "6qy1s2lt",
                            ean: 193822707551,
                            resolution: "1366 x 768",
                            screenSize: '15"',
                            os: "FreeDOS",               
                            processor: "AMD",
                            processorSpeed: "3.7 GHz",
                            ram: "16 GB"
                        },
                        price: 34999,
                        stock: 7,
                        pictureUrl:[
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00165/1000x1000-NOT00165.jpg&h=220',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT000A3/1000x1000-NOT000A3-2.jpg&w=500&q=100',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT000A3/1000x1000-NOT000A3-1.jpg&w=500&q=100'
                        ] 
                    },
                    {
                        id: 3,
                        title: "Notebook Hp 240 I9tx 8gb 15.2' + Funda",
                        details: {
                            brand: "Hp",
                            model: "6qy1s2lt",
                            ean: 19388707551,
                            resolution: "1366 x 768",
                            screenSize: '15,2"',
                            os: "FreeDOS",               
                            processor: "AMD",
                            processorSpeed: "3.7 GHz",
                            ram: "8 GB"
                        },
                        price: 53999,
                        stock: 7,
                        pictureUrl: [
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00175/1000x1000-NOT00175.jpg&h=220',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KNOT057F/1000x1000-KNOT057F.jpg&w=500&q=100'
                        ] 
                    },
                    {
                        id: 4,
                        title: "Notebook HP R3-2200U I7 16gb 14'",
                        details: {
                            brand: "Hp",
                            model: "6qy1s2lt",
                            ean: 19388707551,
                            resolution: "1366 x 768",
                            screenSize: '14"',
                            os: "FreeDOS",               
                            processor: "I7",
                            processorSpeed: "3.7 GHz",
                            ram: "16 GB"
                        },
                        price: 67999,
                        stock: 15,
                        pictureUrl: [
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00156/1000x1000-NOT00156.jpg&h=220',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00132/1200x900-NOT00132-1.jpg&w=500&q=100',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00132/1200x900-NOT00132-5.jpg&w=500&q=100'
                        ] 
                    },
                    {
                        id: 5,
                        title: "Notebook Lenovo ideapad AMD Ryzen 7",
                        details: {
                            brand: "Lenovo",
                            model: "6q3332lt",
                            ean: 1938000551,
                            resolution: "1366 x 768",
                            screenSize: '7"',
                            os: "FreeDOS",               
                            processor: "I3",
                            processorSpeed: "3.7 GHz",
                            ram: "16 GB"
                        },
                        price: 128999,
                        stock: 4,
                        pictureUrl: [
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00172/1000x1000-NOT00172.jpg&w=500&q=100',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00172/1200x900-NOT00172-1.jpg&w=500&q=100',
                            'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00172/1200x900-NOT00172-4.jpg&w=500&q=100'
                        ] 
                    },
                    {
                        id: 6,
                        title: "Play Station 4",
                        details: {
                            brand: "Play Station",
                            model: "6q33st",
                            ean: 1922200551,
                            resolution: "4k",
                            screenSize: '-',
                            os: "-",               
                            processor: "quad core",
                            processorSpeed: "3.7 GHz",
                            ram: "32 GB"
                        },
                        price: 55000,
                        stock: 12,
                        pictureUrl: [
                            'https://http2.mlstatic.com/D_NQ_NP_649508-MLA31018432220_062019-O.webp',
                            'https://http2.mlstatic.com/D_NQ_NP_777734-MLA32731813774_112019-O.webp'
                        ]
                    },
                    {
                        id:7,
                        title: "Play Station 5 joystick icluido",
                        details: {
                            brand: "Play Station",
                            model: "6q33st",
                            ean: 1922200551,
                            resolution: "8k",
                            screenSize: '-',
                            os: "-",               
                            processor: "octa core",
                            processorSpeed: "6.7 GHz",
                            ram: "64 GB"
                        },
                        price: 155000,
                        stock: 7,
                        pictureUrl: [
                            'https://http2.mlstatic.com/D_NQ_NP_818287-MLA44462133540_122020-O.webp',
                            'https://http2.mlstatic.com/D_NQ_NP_894967-MLA44481812766_012021-O.webp'
                        ] 
                    },
                    {
                        id:8,
                        title: "Joystick Ps5 dualsense",
                        details: {
                            brand: "Play Station",
                            model: "6q33st",
                            ean: 1922200551,
                            resolution: "-",
                            screenSize: '-',
                            os: "-",               
                            processor: "-",
                            processorSpeed: "-",
                            ram: "-"
                        },
                        price: 27500,
                        stock: 15,
                        pictureUrl: [
                            'https://http2.mlstatic.com/D_NQ_NP_991801-MLA44330912940_122020-O.webp',
                            'https://http2.mlstatic.com/D_NQ_NP_735394-MLA44170549482_112020-O.webp',
                            'https://http2.mlstatic.com/D_NQ_NP_731754-MLA44170554226_112020-O.webp'
                        ] 
                    },
                    {
                        id:9,
                        title: "Joystick Ps4",
                        details: {
                            brand: "Play Station",
                            model: "6q33st",
                            ean: 1922200551,
                            resolution: "-",
                            screenSize: '-',
                            os: "-",               
                            processor: "-",
                            processorSpeed: "-",
                            ram: "-"
                        },
                        price: 12500,
                        stock: 12,
                        pictureUrl: [
                            'https://http2.mlstatic.com/D_NQ_NP_898103-MLA32556737376_102019-O.webp'
                        ] 
                    },
                    {
                        id:10,
                        title: "Fifa 21 Fisico Original",
                        details: {
                            brand: "Ea Sports",
                            model: "6q33st",
                            ean: 1922200551,
                            resolution: "-",
                            screenSize: '-',
                            os: "-",               
                            processor: "-",
                            processorSpeed: "-",
                            ram: "-"
                        },
                        price: 24000,
                        stock: 20,
                        pictureUrl:[
                            'https://http2.mlstatic.com/D_NQ_NP_761792-MLA43730061265_102020-O.webp'
                        ] 
                    },
                ];
    
                flag ? resolve(products) : reject("fallo promesa");
    
            }, 1500);
        });

        itemPromise
        .then(items =>{

            if (isMounted){

                let filterItem = items.filter(i => i.id === parseInt(id));

                filterItem.length === 0 ? setItem("not exist") : setItem(filterItem);
            }
        })
        .catch(e => console.log(e))

        return ()=> {
            isMounted = false;
        }

    }, [id]);


    return (
        <>
            <ItemDetail item={item} /> 
        </>
    )
}

export default ItemDetailContainer
