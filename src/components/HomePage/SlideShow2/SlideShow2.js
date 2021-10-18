import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SlideCard from './SlideCard'
import Data from './owlData.json'
import { BrowserRouter , Route, useParams } from 'react-router-dom'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const SlideShow2 = () => {

    // const baseURL = "https://fakestoreapi.com/products";

    // const [post, setPost] = useState(null);

    // useEffect(() => {
    //     axios.get(`${baseURL}/20`).then((response) => {
    //         setPost(response.data);
    //     });
    // }, []);

    // if (!post) return null;


    return (

        <div className="slideshow2">
            <div className="container">
                <h1>Featured Products</h1>
                <div className="carousel-block">
                    <OwlCarousel items={5} margin={2}>

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

export default SlideShow2
