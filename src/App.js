import React, { useState } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import about from './components/About'
import contacts from './components/Contacts'
import StoreLocation from './components/StoreLocation'
import TrackOrder from './components/TrackOrder'
import Blog from './components/Blog'
import ProductDetail from './components/HomePage/SlideShow2/ProductDetail'
import HomePage from './components/HomePage/HomePage'

const App = () => {

  const [aboutPath] = useState("/about")
  const [contactPath] = useState("/contacts")
  const [storeLocPath] = useState("/storelocation")
  const [trackOrderPath] = useState("/trackorder")
  const [homePath] = useState("/home")
  const [blogPath] = useState("/blog")

  return (
    <div>
      <BrowserRouter>
        <Header aboutPath={aboutPath} contactPath={contactPath} storeLocPath={storeLocPath} trackOrderPath={trackOrderPath} blogPath={blogPath} homePath={homePath} />
        <Switch>
          <Route exact path={homePath} component={HomePage} />
          <Route path={aboutPath} component={about} />
          <Route path={contactPath} component={contacts} />
          <Route path={storeLocPath} component={StoreLocation} />
          <Route path={trackOrderPath} component={TrackOrder} />
          <Route path={blogPath} component={Blog} />
          <Route path={`${homePath}/:productId`} component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
