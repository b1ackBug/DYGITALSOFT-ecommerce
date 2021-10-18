import React from 'react'
import SlideShow1 from './SlideShow1/SlideShow1'
import PopularCategories from './Categories/PopularCategories'
import SlideShow2 from './SlideShow2/SlideShow2'
import SlideShow3 from './SlideShow3/SlideShow3'

const HomePage = () => {
    return (
        <>
            <SlideShow1 />
            <br /><br /><br />
            <PopularCategories />
            <br /><br /><br />
            <SlideShow2 />

            <br /><br />
            <SlideShow3 />
        </>
    )
}

export default HomePage
