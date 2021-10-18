import React from "react";
import categoryImgHeadlights from '../../../Assets/Img/Categories/category-1-160x160.jpg';
import categoryImgFuelsystem from '../../../Assets/Img/Categories/category-2-160x160.jpg';
import categoryImgBodyparts from '../../../Assets/Img/Categories/category-3-160x160.jpg';
import categoryImgInteriorParts from '../../../Assets/Img/Categories/category-4-160x160.jpg';
import categoryImgWheelTires from '../../../Assets/Img/Categories/category-5-160x160.jpg';
import categoryImgEngineDrivetrain from '../../../Assets/Img/Categories/category-6-160x160.jpg';


const Card = props => {
    return (
        <div className="categoryCardBody">
            <div className="categoryImage">
                <img src={props.img} alt="Img" />
            </div>
            <div className="categoryContent">
                <h3 className="categoryTitle">{props.title}</h3>
                <ul>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    <li>{props.li4}</li>
                    <li>{props.li5}</li>
                </ul>
                <p>Shop All</p>
            </div>
        </div>
    )
};
const PopularCategories = () => {
    return (
        <div className="category">
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Popular Categories</h1>
                <div className="categoryCards">
                    <Card img={categoryImgHeadlights} title="HeadLights" li1="Headlights" li2="Tail Lights" li3="Fog Lights" li4="Turn Signals" li5="Switches & Relays" />
                    <Card img={categoryImgFuelsystem} title="Fuel System" li1="Headlights" li2="Tail Lights" li3="Fog Lights" li4="Turn Signals" li5="Switches & Relays" />
                    <Card img={categoryImgBodyparts} title="Body Parts" li1="Headlights" li2="Tail Lights" li3="Fog Lights" li4="Turn Signals" li5="Switches & Relays" />
                    <Card img={categoryImgInteriorParts} title="Interior Parts" li1="Headlights" li2="Tail Lights" li3="Fog Lights" li4="Turn Signals" li5="Switches & Relays" />
                    <Card img={categoryImgWheelTires} title="Wheels & Tires" li1="Headlights" li2="Tail Lights" li3="Fog Lights" li4="Turn Signals" li5="Switches & Relays" />
                    <Card img={categoryImgEngineDrivetrain} title="Engine & Drivetrain" li1="Headlights" li2="Tail Lights" li3="Fog Lights" li4="Turn Signals" li5="Switches & Relays" />
                </div>
            </div>
        </div>
    )
};

export default PopularCategories;