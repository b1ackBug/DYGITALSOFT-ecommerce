import React from 'react'
import ProductData from './owlData.json'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productId } = useParams();
    // const thisProduct = ProductData.find(prod => prod.id === productId)
    // const index = productId.index
    // const name = ProductData
    const thisProduct = ProductData[productId-1]

    return (

        <div className="productDetail">
            {/* <img src=thisProductimg} alt="salam" />
            <h1>thisProductname}</h1>
            <p>thisProductprice}</p>
            <p>thisProductdescription}</p> */}
            <div className="container">
                <div className="row rowmain">
                    <div className="leftside col-9">
                        <div className="row rowproduct">
                            <div className="col-md-5 imageside">
                                <div className="image">
                                    <img src={thisProduct.img} alt={ProductData[productId - 1].name} />
                                </div>
                            </div>
                            <div className="col-md-7 contentside">
                                <div className="content">
                                    <div className="name">
                                        <h1>{thisProduct.name}</h1>
                                    </div>
                                    <div className="review">
                                        <p>{thisProduct.review} reviews</p>
                                    </div>
                                    <div className="description">
                                        <p>{thisProduct.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloremque minima quia suscipit molestiae earum ex quisquam excepturi, odio aliquam?</p>
                                    </div>
                                    <div className="features">
                                        <h4>Key Features:</h4>
                                        <ul>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightside col-3">
                        <div className="aboutproduct">
                            <div className="price">
                                <h1>${thisProduct.price}</h1>
                            </div>
                            {ProductData[productId - 1].inStock == true ? 
                            <div className="instock"><span style={{ "backgroundColor": "#e2f2da" }}>In stock</span></div> : 
                            <div className="instock"><span style={{ "backgroundColor": "red" }}>Sold out</span></div>
                            }
                            <br />
                            <div className="name">{thisProduct.name}</div>
                            <div className="description">{thisProduct.description}</div>
                        </div> <br /><br /><br />
                        <div className="addtocart d-flex">
                            <input type="number" />
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
