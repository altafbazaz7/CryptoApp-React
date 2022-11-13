import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { CoinList } from "../../config/Api";
import { CryptoState } from "../../CryptoContext";
import Pagination from '@mui/material/Pagination';


const CoinsTable = () => {

  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");
  const [page,setpage] = useState(1);

  const { currency,symbol } = CryptoState();

  useEffect(() => {
    fetchCoins();
  }, [currency]);


  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    setcoins(data);
    setloading(false);
  };
  console.log(coins);



  return (
    <>
      
      {
        
          loading?(
          <div class="progress">
            <div
              class="progress-bar bg-success  width .6s ease"
              role="progressbar"
              aria-label="Danger example"
              style={{width: "100%",height:"25px"}}            
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="80"
            ></div>
          </div>
          ):(
            <div className="container d-flex flex-row flex-wrap  justify-content-around ">
          {
            coins
            .slice((page-1)*10,(page-1)*10+12)
            .map((curElem,idx)=>{
    let profit = curElem.price_change_percentage_24h >=0;

              return(
                  <>
                  
  <div class="card" style={{width: '18rem',marginTop:"33px"}}>
  <div class="card-body">
  <div className="box d-flex flex-row  justify-content-around ">
   <h5 class="card-title">  {curElem.name}  </h5>
    <img src={curElem.image} style={{height:"50px"}} alt="" />
    </div>

    <h6 class="card-subtitle mb-2 text-muted">{curElem.symbol.toUpperCase()}</h6>
    <h6  style={{color: profit>0?"green":"red"}}>24hr Change : {curElem.price_change_percentage_24h}%</h6>
    <h6>Current Price : {curElem.current_price} {symbol}</h6>
    <h6>Market Capital : {curElem.market_cap.toString().slice(0, -6)} {symbol}</h6>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>

                  </>
              )
            })
          }

          <Pagination count={(coins?.length/12).toFixed(0)} onChange={(_,value)=>{setpage(value);  window.scroll(0,-2750)}} />
            </div>
          )
        
      }

     
    </>
  );
};

export default CoinsTable;
