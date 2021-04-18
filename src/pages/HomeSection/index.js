import React from 'react'
import Info from './Info'
import './index.css'
import Footer from './Footer'
const Home = () => {
    return (
    < >
        <div style={{
         display: 'flex',
         justifyContent: 'center', 
         alignItems: 'center', 
         height: '100vh'
        }} >
            <img src="image_interior_1800x900.jpg" alt="homecar" className="home-car"/>
            </div>
        <Info />    
        <Footer /> 
    </>
    )
}

export default Home
