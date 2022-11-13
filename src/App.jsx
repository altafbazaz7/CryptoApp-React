import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Coins from './pages/Coins';
import "./App.css"


const App = () => {
  return (
    <>
    
        <Navbar/>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coins/:id' element={<Coins/>}/>
      </Routes>
  
    </>
  )
}

export default App
