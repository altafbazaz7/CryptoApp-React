import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CryptoContext from './CryptoContext'
import './index.css'
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <CryptoContext>
    <App />
  </CryptoContext>
  </Router>
  </React.StrictMode>
)
