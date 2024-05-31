import React from 'react'
import { StoreState } from './StoreContext'
import whishheart from './images/heartlog1o - Copy.png'
import { Link } from 'react-router-dom'



function Wishlist() {
    const{setViews,setViews1,setViews2,wishlist}=StoreState();


    function view(productphoto,productname,productprice){
        setViews(productphoto)
        setViews1(productname)
        setViews2(productprice)
        window.scrollTo(0,0);
    }

  return (
    <div className='wholewishlistpage'>
        <div className='womenpageheader'>
        <h1 className='wishlistheading'>MY WISHLIST</h1>
        <p className='wishlistheading1'>[{wishlist.length}]</p>
        </div><br></br>
        {wishlist.length > 0 ?<p className='wishlistsubheading'>{wishlist.length} ITEMS</p> : <p className='wishlistsubheading'>Your Wishlist is empty, 
        Add products to wishlist using the hearticon.<br></br>Item's added to wishlist once can't be removed, Dont worry! it can be added to Cart anytime. </p>}
        

        {/* procutarray */}
        <div className='wishlistbox1'>
        {wishlist.map((a)=>
        <Link to="/ViewingProducts" className='linkstoview'>
        <button className='buttonforview' onClick={()=>view(a.image,a.product,a.price)}>
        <div className='wishlistbox2' key={a.id}>
            <p className='wishboxprice'>${a.price}.00</p>
            <img src={whishheart} className='wishboxheart' alt='adiddaslogo'/>
            <img src={a.image} className='wishboximage' alt='adiddaslogo'/>
            {a.product}
        </div>
        </button>
        </Link>
        )}
        </div>
        

    </div>
    
  )
}

export default Wishlist