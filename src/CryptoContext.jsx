import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

// creating the context
const Crypto = createContext();

const CryptoContext = ({children}) => {
const[currency,setcurrency]=useState("INR");
const[symbol,setsymbol]=useState("₹");
useEffect(()=>{
  if(currency==="INR"){
    setsymbol("₹");
 }else if(currency === "USD"){
    setsymbol("$");
 }
},[currency])



  return <Crypto.Provider
          value={{currency,setcurrency,symbol}}>
          {children} 
          </Crypto.Provider>
  
}

export default CryptoContext;

// sending the context using hook
export const CryptoState = () => {
  return useContext(Crypto)
}