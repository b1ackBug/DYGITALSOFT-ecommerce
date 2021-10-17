import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderTop from './HeaderTop'


const Header = (props) => {
  return (
    <div className="header p-0 m-0">
      <HeaderTop aboutPath={props.aboutPath} contactPath={props.contactPath} storeLocPath={props.storeLocPath} trackOrderPath={props.trackOrderPath} blogPath={props.blogPath}/>
      <div className="head2">
        <div className="head2Logo">
          <h1>Red Parts</h1>
        </div>
        <div className="head2Search">
          <div className="searchDiv">
            <label htmlFor="cars">Bütün : </label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <form>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
        <div className="head2Add">
          <div className="head2AddHeart Heart">
            <i className="far fa-heart"></i>
          </div>
          <div className="head2AddHeart">
            <i className="far fa-user"></i>
            <div>
              <p>Hello,Log in</p>
              <h6>My Account</h6>
            </div>
          </div>
          <div className="head2AddHeart">
            <i className="fas fa-shopping-cart"></i>
            <div>
              <p>Shopping Cart</p>
              <h6>$250.00</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="head3">

      </div>
    </div>
  )
}

export default Header

