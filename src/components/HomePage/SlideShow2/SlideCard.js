import React from 'react';


const SlideCard = (props) => {
    return (
        <div className="carousel1-item">
            <div className="item-img">
                <img src={props.img} alt="Image" />
                <div className="item-icons-cart">
                    <i className="fas fa-stream"></i>
                    <div className="item-icons-hidden">
                        <i className="far fa-heart"></i>
                        <i className="fas fa-signal"></i>
                    </div>
                </div>
            </div>
            <div className="item-content">
                <span>{props.key}</span>
                <h3>{props.name}</h3>
                <div className="item-icons">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>{props.review} reviews</span>
                </div>
                <h2>${props.price}</h2>
                <div className="item-shopping-icon">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
        
    )
}


// const CarouselTest = () => {
//     return (
//         <div className="slideshow2">
//             <h1>Featured Products</h1>
//             <div className="carousel-block">
//                 <SlideCard />
//                 <SlideCard />
//                 <SlideCard />
//             </div>
//         </div>
//     )
// }

export default SlideCard;