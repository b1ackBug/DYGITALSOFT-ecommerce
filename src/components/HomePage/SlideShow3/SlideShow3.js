import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SlideCard from '../SlideShow2/SlideCard';
import Data from '../SlideShow2/owlData.json'


const SlideShow3 = () => {
    return (
        <div className="slideshow3 container-fluid">
            <div className="container">
            <div className="carousel-block">
                    <OwlCarousel items={5} margin={2} dots={false}>

                        {Data.map((slide) => {
                            return <SlideCard
                                productId={slide.id} img={slide.img}
                                name={slide.name} desc={slide.desc}
                                category={slide.category} price={slide.price}
                                review={slide.review}
                            />
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default SlideShow3
