import React from 'react'
    
const Slides = (props) => {
    return (
        <div className="slide">
            <img src={props.img} />
            <div className="content">
                <div className="discount">
                    <span>{props.discount}%</span>
                </div>
                <div className="desc1">
                    <h1>{props.name}.</h1>
                </div>
                <div className="desc2">
                    <h4>{props.description}</h4>
                </div>
            </div>
        </div>
    )
}

export default Slides
