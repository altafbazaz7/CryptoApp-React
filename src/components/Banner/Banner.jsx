import React from 'react'
import img from "../../bgimg.jpg"
import Carousel from './Carousel'
import "./Banner.css"

const Banner = () => {
  return (
    <div style={{border:"1px solid black", height:"400px",backgroundImage:`url(${img})`,color:"white"}} class="container-fluid d-flex flex-column align-items-center">
    
  <h1 id='headtag'>CryptoTracker</h1>
 
    
    
    <span><i>Welcome to CryptoTracker developed by Altaf.</i></span>
    
    <Carousel/>
  </div>
  )
}

export default Banner
