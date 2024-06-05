import React, {useState } from 'react'
import "./App.css";
import "./Products.css"
import logo from './images/Adidas-Logo.jpg';
import cartlogo from './images/carticon.png'
import wishlistheart from './images/heartlog1o.png'
import searchicon from './images/search.png'
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';
import Cart from './Cart';
import OrdersandReutrnspage from './OrdersandReutrnspage';
import Home from './Home';
import Signup from './Signup';
import Logging from './Logging';
import Page from './Page';
import Confirmedorderpage from './Confirmedorderpage';
import Men from './Men'
import Women from './Women';
import Sports from './Sports'
import Wishlist from './Wishlist';
import ViewingProducts from './ViewingProducts';
import { StoreState } from './StoreContext';




function App() {
  const{activeStatus,cart,productcatelog,activeusername,wishlist}=StoreState();
  const[searchQuery,setSearchQuery]=useState()
  
  function searchprod(e){
    setSearchQuery(e)
  }
  const searchedProducts = productcatelog.filter((a) =>a.category.toLowerCase() === searchQuery);


  return (
    <BrowserRouter>
    <div>
        <div className='black'>{activeStatus === 0 ? <p>SIGNUP & GET 15% OFF</p> :<p>CHECKOUT NOW WITH 15%OFF!</p>}</div>
        
        {/* header */}
        <div className='header'>
          <Link className='Linksmain' to="/Home"><img className='logo' src={logo} alt='adiddaslogo'></img></Link>
            <div className='mainbox'>
              <Link className='Linksmain' to="/Home"><p>HOME</p></Link>
              <Link className='Linksmain' to="/Men"><p>MEN</p></Link>
              <Link className='Linksmain' to="/Women"><p>WOMEN</p></Link>
              <Link className='Linksmain' to='/Sports'>SPORTS</Link>
              <p className='red' title='comming soon! Not Available Right Now'>OUTLET</p>
              <p className='red' title='comming soon! Not Available Right Now'>LIFESTYLE</p>
              <p className='red' title='comming soon! Not Available Right Now'>NEW</p>
            </div>
            <div className='helpbox'>
              <div className='inputvalue'> 
                <p>Help</p>
                <Link to='/Wishlist' className='Links'><p>whishlist</p></Link>
                {activeStatus ===0 ? <p><Link className='Linksnotactive' to="/Logging">Login</Link></p> : <Link className='Linksactive' to="/Logging">&nbsp;welcome back {activeusername.toLowerCase()}</Link>}
                <Link className='Links' to="/OrdersandReutrnspage">Orders and Returns</Link>
              </div>
              <div className='inputvalue2'>
                <input className='searchbox' placeholder='  Search' type='search' onChange={(e)=>searchprod(e.target.value)}></input>
                <img src={searchicon} className='searchicon' alt='adiddaslogo'></img>
                <Link to='/Wishlist' >{wishlist.length > 0 && <p className='wishcount' >{wishlist.length}</p>}<img src={wishlistheart} className='wishlistheart' alt='adiddaslogo'></img></Link>
                <Link to='/Cart' >{cart.length > 0 && <p className='cartcount' >{cart.length}</p>}<img src={cartlogo} className='cartlogo' alt='adiddaslogo'n></img></Link>
              </div>
            </div>
        </div>
        
        <div>
          {searchedProducts.map((a)=><div key={a.id}>{a.name}</div>)}
        </div>    
        <Routes>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/OrdersandReutrnspage" element={<OrdersandReutrnspage/>}/>
          <Route path="/adidas-clone" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Men" element={<Men/>}/>
          <Route path="/Women" element={<Women/>}/>
          <Route path="/Sports" element={<Sports/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Logging" element={<Logging/>}/>
          <Route path="/Page" element={<Page/>}/>
          <Route path="/Confirmedorderpage" element={<Confirmedorderpage/>}/>
          <Route path="/Wishlist" element={<Wishlist/>}/>
          <Route path="/ViewingProducts" element={<ViewingProducts/>}/>
        </Routes>
        
        
    </div>
    <p className='footerbox'>
          <p className='footerboxtext'>Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp; Terms and Conditions &nbsp;&nbsp;|&nbsp;&nbsp; Cookies</p>
          <p className='footerboxtext'>@2024 adidas clone by | &nbsp;karthik M &nbsp;|&nbsp;9600732925</p>  
    </p>
    </BrowserRouter>
    
  
  )
}

export default App




