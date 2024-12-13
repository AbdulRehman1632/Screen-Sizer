import React from 'react'
import MainFunction from '../MainFunction/MainFunction'
import ScreenNav from '../Navbar/ScreenNav'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

const Banner = () => {
  return (
    <div>
        
        <ScreenNav/>
        <MainFunction/> 
        <Content/>
        <Footer/>
      
    </div>
  )
}

export default Banner
