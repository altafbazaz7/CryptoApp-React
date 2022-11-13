import React, { useState } from 'react';
import axios from 'axios';
import {TrendingCoins} from '../../config/Api'
import { CryptoState } from '../../CryptoContext';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link} from 'react-router-dom';
import "./Carousel.css"


const Carousel = () => {
  
  const[trending,settrending]=useState([]);
  // state from context API
  const {currency,symbol} = CryptoState();
  
  const fetchCoins = async() => {
    const response = await axios.get([TrendingCoins(currency)]);
    settrending(response.data)
  }
 
  const items = trending.map((coin)=>{
    let profit = coin.price_change_percentage_24h >=0;
    return (
      <Link className='carousel items' to={`/coins/${coin.id}`}>
      <div className="contentWrapper">
        <img src={coin?.image} alt={coin.name} height="80px" style={{marginBottom:"25px"}}/>
        <div style={{textTransform:"uppercase"}} >{coin?.symbol}
        <br />
        <h5 style={{color: profit>0?"green":"red"}}>{profit && '+'}{coin?.price_change_percentage_24h?.toFixed(2)}% </h5>
        <br />
        <span>{symbol} {" "} {coin.current_price}</span>
        </div>
      </div>
      </Link>
    )
})



  const resposive = {
    0:{
      items:2,
    },
    512:{
      items:4,
    }
  }


  // console.log(trending);

  useEffect(()=>{
      fetchCoins()
  },[currency])

  return (<div className='carousel'>
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableButtonsControls
      disableDotsControls
      resposive={resposive}
      autoPlay
      items={items}
    />
  </div>
  )
}

export default Carousel
