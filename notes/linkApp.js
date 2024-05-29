import React from 'react'
import Home from './Home';
import Products from './Produts';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
    <div className='black'></div>
    <BrowserRouter>
    <div className='header'>
    <h1 className='logo'>Adidas</h1>
        <ul>
            <li> <Link className='links' to="/Home">Home</Link></li>
            <li> <Link className='links' to="/Products">Products</Link></li>
        </ul>
        
    </div>
    
   
    <div className='home'>
    <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App