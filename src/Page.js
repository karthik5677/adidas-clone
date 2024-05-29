import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';
import { StoreState } from './StoreContext';
import React, {  useContext, useState } from 'react'
import img1 from './images/carticon.png'
import Debitcrd from './Debitcrd';

function Page() {

  const{activeStatus,setActiveStatus,userName,setUserName,total,setTotal,price,setPrice,image,setImage,name,setName,cart,setCart,userdetails,setUserdetails}=StoreState();
  





  return (
    <div>

      {activeStatus ===0 ?
        <div>
          <p className='loginmessage'>PLEASE LOG IN TO CHECKOUT!</p>
          <Link className='loginbutton' to="/Logging">LOGIN ⟶</Link>
        </div>
         : 
        <div>
          <div className='headerbox1'>
            <p className='headerbox1name'>HI, KARTHIK!</p>
            <p className='cartcountpage' >{cart.length}</p>
            <img className='headerbox1carticon' src={img1}></img>
          </div>
          <div className='headerbox2'>
            <p className='headerbox2checkout'>CHECKOUT</p>
            <p className='headerbox2items'>({cart.length} items) ${Math.round(total)}.00</p>
          </div>

          <div className='checkoutpagebox1'>
            <div className='checkoutpagebox1a'>
              <div className='contactbox'>
                <p className='contactheading'>CONTACT</p>
                <p className='contactgmail'>{userdetails.map((a)=><p key={a.id}>{a.useremail}</p>)}</p>
              </div>
              <div>
              <p className='contactheading'>ADDRESS</p>
              <h6 className='contactgmail'>Delivery address</h6><br></br>
              <input className='inputboxadressdetails' placeholder='FIRST NAME*'></input><br></br><br></br>
              <input className='inputboxadressdetails' placeholder='LAST NAME*'></input><br></br><br></br>
              <input className='inputboxadressdetails' placeholder='DELIVERY ADDRESS*'></input><br></br>
              <Link className='confirmorderutton'  >CONFIRM ORDER ⟶</Link>
              
              </div>
              
            </div>



            <div className='checkoutpagebox1b'>
              <p className='contactheading'>YOUR CART</p>
              <p className='checkouttot'>{cart.length} item</p>
              <p className='checkouttot'>Delivery</p>
              <h6 className='checkouttotbold'>Total</h6>
              <p className='checkouttot'>(Inclusive of all taxes)</p><br></br>
              <Link className='editoption' to="/Cart">50% Aditional discount can be applied by using promo code - GET NOW</Link>
              

            </div>

            <div  className='checkoutpagebox1c'>
              <div className='editoption'>
                <Link className='editoption' to="/Cart">EDIT</Link>
              </div>
              <p className='checkouttot'>${Math.round(total)}.00</p>
              <p className='checkouttot'>free</p>
              <h6 className='checkouttotbold'>${Math.round(total)}.00</h6>
            </div>
              
            
          
          </div>
          
          
        </div>
        
      }

    {/* <Debitcrd/> */}
    </div>


  )
}

export default Page