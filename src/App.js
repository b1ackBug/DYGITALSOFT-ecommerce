import React, {useState} from 'react'
import Header from './components/Header/Header'
import { BrowserRouter , Route } from 'react-router-dom'
import about from './components/About'
import contacts from './components/Contacts'
import StoreLocation from './components/StoreLocation'
import TrackOrder from './components/TrackOrder'
import Blog from './components/Blog'
import SlideShow1 from './components/HomePage/SlideShow1/SlideShow1'
import PopularCategories from './components/Categories/PopularCategories'
import SlideShow2 from './components/HomePage/SlideShow2/SlideShow2'
import SlideShow3 from './components/HomePage/SlideShow3/SlideShow3'

const App = () => {

  const[aboutPath]=useState("/about")
  const[contactPath]=useState("/contacts")
  const[storeLocPath]=useState("/storelocation")
  const[trackOrderPath]=useState("/trackorder")
  const[blogPath]=useState("/blog")

  return (
    <div>
      <BrowserRouter>
        <Header aboutPath={aboutPath} contactPath={contactPath} storeLocPath={storeLocPath} trackOrderPath={trackOrderPath} blogPath={blogPath} />
        <Route path={aboutPath} component={about} />
        <Route path={contactPath} component={contacts}/>
        <Route path={storeLocPath} component={StoreLocation}/>
        <Route path={trackOrderPath} component={TrackOrder}/>
        <Route path={blogPath} component={Blog}/>
        <SlideShow1/>
        <br /><br /><br />
        <PopularCategories/>
        <br /><br /><br />
        <SlideShow3/>
        <br /><br />
        <SlideShow2/>
      </BrowserRouter>
    </div>
  )
}

export default App
