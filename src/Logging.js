import face from './images/Facebook.jpg'
import apple from './images/apple-logo-transparent.jpg'
import gog from './images/Google.jpg'
import {Link } from 'react-router-dom';
import { StoreState } from './StoreContext';
import React, { useState } from 'react'


function Signup() {
  
  const{activeStatus,setActiveStatus,userdetails,setUserdetails,activeusername,setActiveUsername}=StoreState();
  const[email,setEmail]=useState('');
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const[mobile,setMobile]=useState('')
  const[errormessage,setErrormessage]=useState("")
  function handleemail(e){
    setEmail(e);
  }
  function handleusername(e){
    setUserName(e)
    setActiveUsername(e)
  }
  function handlepassword(e){
    setPassword(e)
  }
  function handlemobilenumber(e){
    setMobile(e)
  }
  function handlesubmit(e){
    e.preventDefault()
    if(email.length === 0){setErrormessage("Please fill all the fields to continue!")}
    else if(userName.length === 0){setErrormessage("Enter user name!")}
    else if(password.length < 6 ){setErrormessage("Password should contain atleast six character! ")}
    else if(mobile.length < 10){setErrormessage("Enter ten digit mobile number to continue!")}
    else if(mobile.length > 10){setErrormessage("Phone number too long!")}
    else{
      const a= {id:1,useremail:email,username:userName,userpassword:password,usermobilenumber:mobile}
      setUserdetails([...userdetails,a])
      setEmail('');setUserName('');setPassword('');setMobile('');
      setActiveStatus("active")
      window.scrollTo(0,0)
    }
    
  }
  function loguserout(){
    setActiveStatus(0);
    setUserdetails("");
  }

  return (

    <div>
      {activeStatus === 0 ? 
        <p>
          <div className='signup'>
            <div className='signup1'>
              <p className='bannersignup'>JOIN  NOW<br></br></p>
              <p className='loginpageul'>
                <li>➔ Free delivery</li>
                <li>➔ A 15% off voucher for your next purchase</li>
                <li>➔ Access to Members Only products and sales</li>
                <li>➔ Access to adidas Running and Training apps</li>
                <li>➔ Special offers and promotions</li>
              </p>
            </div>
            <div className='signup2'>
              <p className='banner1'>SIGNUP AND GET 15% OFF AND GET FREE<br></br> DELIVERY ON YOUR NEXT ORDER </p>
              <form> 
                <h5>Login or Signup</h5> 
                <div className='socialmedia'>
                  <div className='mediabox'><a href='https://www.apple.com/in/'> <img className='mediaboximg' src={apple} alt='adiddaslogo'></img></a></div>
                  <div className='mediabox'><a href='https://www.facebook.com/login/'><img className='mediaboximg' src={face} alt='adiddaslogo'></img></a></div>
                  <div className='mediabox'><a href='https://www.google.com/'><img className='mediaboximg' src={gog} alt='adiddaslogo'></img></a></div>
                </div>
                <input className='email' placeholder='  EMAIL ADDRESS *' type='email' value={email} onChange={(e)=>handleemail(e.target.value)}></input><br></br>
                <input input className='email' placeholder='  USERNAME *' type='text' value={userName} onChange={(e)=>handleusername(e.target.value)}></input><br></br>
                <input className='email' placeholder='  PASSWORD *' type='password' value={password} onChange={(e)=>handlepassword(e.target.value)}></input><br></br>
                <input className='email' placeholder='  MOBILE *' type='number'value={mobile} onChange={(e)=>handlemobilenumber(e.target.value)}></input><br></br>
                <p className='s1'><input type='checkbox'className='checkbox'></input> I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.</p>
                <p className='s1'><input type='checkbox'className='checkbox'></input> I have read and accepted the Terms & Conditions.</p>
                <p className='signinerrormessage'>{errormessage}</p>
                <button className='checkoutbutton1' type="submit" onClick={handlesubmit}>CONTINUE ⟶</button>
                {/* <Link to='/Cart' ><button className='checkoutbutton1' type="submit" onClick={handlesubmit}>CONTINUE ⟶</button></Link> */}
              </form>
            </div>
          </div>
        </p> : <p>
        <div className='activesiginpagebox1'>
          <p className='activesigninpage1'>HI {activeusername.toUpperCase()}</p>
          <p className='accountstatus'>ACCOUNT STATUS: <p style={{color:"green"}} >Active</p></p><br></br>
          <Link className='emptymessegelink1' to="/Home">CONTINUE SHOPPING </Link>
        </div>
        <div className='activesiginpagebox2'>
        <p className='activesigninpage2'>YOUR VOUCHERS</p>
        <p className='accountstatus2'>You can use the voucher 'adidas50' code to <br></br> get 50% off on your first order.</p>
        <p className='accountstatus2'>Apply voucher in the orders and returns page.</p>
        <p className='activesigninpage2'>LOGIN DETAILS</p>
        {userdetails.map((a)=>
        <p key={a.id}>
          <h5 className='accountstatus3' >PERSONAL INFORMATION</h5>
          <p className='accountstatus2' >{a.username}</p>
          <p className='accountstatus2' >{a.usermobilenumber}</p>
          <h5 className='accountstatus3' >EMAIL</h5>
          <p className='accountstatus2' >{a.useremail}</p>
          <p className='accountstatus3' >PASSWORD</p>
          <p className='accountstatus2' >{a.userpassword}</p>
          </p>
        )}
        <button onClick={loguserout} className='logmeoutbutton'>LOG ME OUT</button>
      </div></p> 
      } 
    </div>
    
    
  )
}

export default Signup