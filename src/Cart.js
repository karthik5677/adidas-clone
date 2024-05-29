import React, { useContext, useState } from 'react'
import { Store } from './App';
import { BrowserRouter ,Link} from 'react-router-dom';
import Page from './Page';
import { StoreState } from './StoreContext';
import ProductsBox from './ProductsBox'

function Cart1(){ 
    const[quan,setQuan]=useState(1);
    const[q,setQ]=useState("");
    const[promo,setPromo]=useState(0);
    const[promodiscount,setPromodiscount]=useState(0);
    const{total,setTotal,image,setImage,name,setName,cart,setCart,size,setSize,userdetails,setUserdetails,activeusername,setActiveUsername}=StoreState();
    const totalprice =cart.reduce((acc, item) => acc + item.price, 0);
    
function addquantity(e){
    setQuan(e);
    }
function removeproduct(id){
    
    const a=cart.findIndex((item)=>item.id === id)
    cart.splice(a,1)
}
function openpromobox(){
    setPromo(1)
}
function promosave(e){
    setQ(e)
}
function promocheck(){
    if(q.toUpperCase() === "ADIDAS50"){
        setPromodiscount(totalprice*50/100)
    }
    
}
setTotal(totalprice-promodiscount);

  return (
    <div className='cart'>
        <div className='cart1'>
            {cart.length > 0 && activeusername.length > 2 && <div className='cartpagewelcomemessege'><p className='cartpagewelcomemessegeinsidetext'>HELLO {activeusername.toUpperCase()}!</p></div>}
            {cart.length === 0 ? <p className='cart1fontfalse'>YOUR BAG IS EMPTY </p> : <p><p className='cart1font'>YOUR BAG</p></p>}
            {cart.length !==0 && <p className='cart1font1'><p>TOTAL ({cart.length} items)</p><br></br><h5>Check out to get your items deliverd !</h5></p>}
            {cart.length===0 && <Link className='emptymessegelink' to="/Home">CONTINUE SHOPPING ⟶</Link>}
            {cart.length ===0 && <p className='cartemptymessege'>Once you add something to your bag - it will appear here.</p>}
            
            <ul className='ulprod'>
                {cart.map((a)=>
                    <li key={a.id}>
                        <div className='cartbox'>
                            <img src={a.image} className='cartboximg'></img>
                            <div className='box20'>
                                <div className='cartdescription'>{a.product.toUpperCase()}<p className='sizeshowincartbox' >Size: {a.size}</p><br></br><br></br></div>
                                <input type='number' className='quantitybox' defaultValue={1} onChange={(e)=>addquantity(e.target.value)}></input>
                            </div>
                            <div className='box19'><p>${a.price}.00</p></div><button className='closebuttoncartbox' onClick={()=>removeproduct(a.id)}>✖</button>
                        </div>
                    </li>
                )}
            </ul>
           
           {cart.length > 0 &&
                <div>
                    {/* work area */}
                    <ProductsBox/>
                
                </div>
           }


            








        </div>
        
        {cart.length !==0 && 
            <div className='cart2'>
                <Link className='Links' to="/Page"><button className='checkoutbutton'><p className='checkoutfont'>CHECKOUT</p><p className='arrow'>⟶</p></button></Link>
                
                <div className='ordersummary'>
                    <div className='box1'>
                        <p className='ordersummaryfont'>ORDER SUMMARY</p>
                        <p className='box1font'>{cart.length} item</p>
                        <p className='box1font'>delivery</p><br></br>
                        <h5 className='total'>Total</h5>
                        <p className='box1font'>(inclusive of all taxes)</p>
                        <br></br>
                        
                        {promo === 0 && <button className='promobutton' onClick={openpromobox}><h5>use promo code</h5></button>}
                        {promo > 0 && promodiscount === 0 && <div className='promoouterbox'><input placeholder=' Enter your promo code' className='promocode' onChange={(e)=>promosave(e.target.value)}></input><button className='promobuttonadd' onClick={promocheck}>+</button></div>}
                        {promodiscount > 0 &&<h5 className='redcolor'> 50 %promo discount applied!</h5>}
                        
                        
                        
                    </div>
                    <div className='box2'>
                        <p className='box2font'>${totalprice} .00</p>
                        <p className='box1font'>free</p><br></br>
                        {promodiscount > 0 ? <h5 className='redcolor'>${Math.round(total)} .00</h5>: <h5 className='blackcolor'>${total} .00</h5> }
                        
                    </div>
                    
                </div>
            </div>
        }

   </div>

 
   
   
    
  )
}

export default Cart1