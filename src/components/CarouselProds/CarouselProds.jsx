import React from 'react'

//Materialize component
import { Carousel } from 'react-materialize'
//Particular CSS
import './CarouselProds.css'

const CarouselProds = ({pictures}) => {

    
    return (
        <>
            <Carousel
                carouselId="Carousel-2"
                images={[
                    `${pictures[0]}` ,
                    `${pictures[1]!== undefined ? pictures[1] : pictures[0]}`,
                    `${pictures[2]!== undefined ? pictures[2] : pictures[0]}`
                ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: true,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 90,
                    shift: 90
                }}
            />
        </>
    )
}

export default CarouselProds
