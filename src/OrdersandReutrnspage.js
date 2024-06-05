import React, { useState } from 'react'
import { StoreState } from './StoreContext';
import img1 from './images/heder).png'

function OrdersandReutrnspage() {
  const{userdetails,setUserdetails,userdetailsaddress,setUserdetailsaddress}=StoreState();
  const{orders,setOrders,cart}=StoreState();
  const[emailinput,setEmailinput]=useState('');
  const[errmsg,setErrmsg]=useState('');
  const[openorderdetaisl,setOpenorderdetaisl]=useState('close');

  function handleemailcheck(){
    const a=userdetails.map((a)=>a.useremail)
    if(emailinput.toString() === a.toString() && orders.length > 0){
      setOpenorderdetaisl("open")
    }
    else if(orders.length === 0){setErrmsg("There are currently no orders in your account! Place any order before checking")}
    else{setErrmsg("The email doesnt match your account!")}
  }
  function getemail(e){
    setEmailinput(e)
  }
  function cancelorder(){
    setOrders([])
    setOpenorderdetaisl("close")
    setErrmsg("Your order has been cancelled! You can place another order.")
    setUserdetailsaddress('')
  }

  return (
    <div className='OrdersandReutrnspage' >
      {openorderdetaisl === 'close' && <div className='falseorderspgwhole'>
        <p className='falseorderspg'>ORDERS AND RETURNS</p>
        <p className='falseorderspg1'>You can exchange or return an item within 14 days after receiving your order.</p>
        <p className='falseorderspg2'>WHAT’S YOUR EMAIL?</p>
        <input className='falseorderspg3' placeholder='   Email *' onChange={(e)=>getemail(e.target.value)}></input>
        <p className='falseorderspg2'>WHAT DO YOU WANT TO DO</p>
        <p className='falseorderspg5'>
          <p className='falseorderspg5-a'><input type='checkbox' checked></input>Track an order</p>
        </p>
        <p className='errormesssageodrrtnpage'>{errmsg}</p>
        <button className='falseorderspg6' onClick={handleemailcheck}>CONTINUE ⟶</button>
        
        </div>}
      {openorderdetaisl === 'open' && <div className='cvbn'>
        <div className='OrdersandReutrnspage1'>
            <div className='odrrtnpage1box'><img src={img1}className='hedericonsordrrtnpage' /></div>
            <div className='odrrtnpage1'>Status:</div>
            <div className='odrrtnpage2'>IN PROGRESS</div>
            <div className='odrrtnpage1'>Your track and trace link will appear once your order is on it's way.</div>
            {orders.map((a)=><p className='odrrtnpage1box_product1' key={a.id}>
                <img src={a.image} className='OrdersandReutrnspageimage' alt='adiddaslogo'/>
                <p>
                <p className='odrrtnpage-a1'>{a.product}</p>
                <p className='odrrtnpage-a2' style={{color:"red"}}>{a.price}.00$</p>
                <p className='odrrtnpage-a2'>Size: {a.size}</p>
                <p className='odrrtnpage-a2'>Colour: Aurora Black / Signal Orange / Dash Grey</p>
                </p>
                
            </p>)}

            <div className='odrrtnpage2-a'>SOMETHING WRONG?</div>
            <div className='odrrtnpage1'>You can cancel an item within 15 minutes after receiving your confirmation mail.</div>
            <button className='falseorderspg6' onClick={cancelorder}>CANCEL ORDER ⟶</button>
        </div>
        <div className='OrdersandReutrnspage2'>
          <div className='odrrtnpage2ordedetails'>ORDER DETAILS</div><br></br>
          <div className='OrdersandReutrnspage2-1'>
            <p className='ordrrtnbox1'>
              <p className='odrrtnpage-a21'> Order number:</p>
              <p className='odrrtnpage-a21'> Date place:</p>
              <p className='odrrtnpage-a21'>Download invoice</p>
            </p>
            <p className='ordrrtnbox2'>
              <p className='odrrtnpage2Pin'> AIN700P00</p>
              <p className='odrrtnpage-a21'> Tue, 4 Jun</p>
            </p>
          </div>
          <div className='odrrtnpage2'>DELIVERY</div>
          <div className='odrrtnpage2delviverysub'>carrier</div>
          <div className='odrrtnpage-a21'>Standard Delivery</div>
          <div className='odrrtnpage2delviverysub'>Delivery address</div>
          <div className='odrrtnpage-a21'>{userdetailsaddress} </div>
        </div>
        </div>}
        
        
    </div>
  )
}

export default OrdersandReutrnspage