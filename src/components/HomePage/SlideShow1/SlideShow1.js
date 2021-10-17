import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slides from './Slides';
import Data from './slideShow1.json'


const SlideShow1 = () => {
    // console.log(Data);
    return (
        <div className="slideshow">
            <div className="container">
             <Carousel showArrows={false} showStatus={false} infiniteLoop={true} showThumbs={false} swipeable={true} emulateTouch={true}>
               {Data.map((slide)=>{
                    return <Slides key={slide.id} img={slide.img} name={slide.name} description={slide.description} discount={slide.discount}/>
               })}
            </Carousel>
        </div>
        </div>
    )
}

export default SlideShow1
