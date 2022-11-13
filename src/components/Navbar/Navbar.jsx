import React from 'react'
import { Link } from 'react-router-dom'
import { CryptoState } from '../../CryptoContext'


const Navbar = () => {
  // importing states from context API
  const {currency,setcurrency} = CryptoState();
  console.log(currency);
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black",color:"white"}} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CryptoTracker</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
<select onChange={(e)=>{setcurrency(e.target.value)}} className="form-select form-select-lg " aria-label=".form-select-lg example">
  <option value={"INR"}>INR</option>
  <option value={"USD"}>USD</option>
</select>
      
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
