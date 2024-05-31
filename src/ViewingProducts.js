import React, {useState } from 'react'
import { StoreState } from './StoreContext';
import {Link } from 'react-router-dom';
import wishlistheart from './images/heartlog1o - Copy.png'



function ViewingProducts() {
    const{views,views1,views2,cart,setCart,size,setSize,wishlist,setWhishlist}=StoreState();
    const[errormsg,setErrormsg]=useState('');
    function sizecount(e){
        setSize(e)
     }
    function addtocart(nameofProduct,sizeofProduct){
        if(cart.some((a)=> a.product === nameofProduct) && cart.some((a)=> a.size === sizeofProduct)){
            setErrormsg("Item alredy in your Cart, Check the OrdersandReturns Page!")
        }
        else if(size === 0){setErrormsg("Select any size of the product!!")}
        else{
            const a= {id:`${new Date()}`,product:views1,price:views2,image:views,size:size}
            setCart([...cart,a])
            if(cart.some((a)=> a.product === nameofProduct)){
                setErrormsg('Item added to your Bag, There is another product of different size already in your Bag!');
            }else{setErrormsg('Item added to your Bag!');window.scrollTo(0,140)}
            
        }
    }
    function closepopup(){setErrormsg('');setSize(0);}
    function addtowishlist(nameofProduct){
        if(wishlist.some((a)=> a.product === nameofProduct)){
            setErrormsg('The Item is alredy in your Wishlist, Check the Wishlist Page!'); 
        }
        else{
        const a= {id:`${new Date()}`,product:views1,price:views2,image:views,size:size}
        setWhishlist([...wishlist,a])
        setErrormsg('Item added to wishlist !');
        }
    }
    return (
        <div className='viewingpage'>
            {views.length > 0 &&
            <div className='viewbox1'>
                <div>
                    <div className='viewbox1part1'>
                        <img className='viewphoto' src={views} alt='adiddaslogo'></img>
                        <img className='viewphotomirrored' src={views} alt='adiddaslogo'></img>
                        {/* popupmessage */}

                        {errormsg.length === 23 && <button className='popupbackground' onClick={closepopup}><div className='popupbackground'></div></button>}
                        {errormsg.length === 23 && 
                        
                        <div className='popupmessagebox'>
                            <div className='popheader'>
                                <p className='popupheading' title='view your bag for more details'>SUCCESSFULLY ADDED TO BAG!</p>
                                <button className='popclosebutton' onClick={closepopup}>✖</button>
                            </div>
                            <div className='popupmessageboxinside'>
                                <div className='popupmessagebox1'>
                                    <div className='popupmessagebox1part1'><img className='popupboximage' src={views} alt='adiddaslogo'></img></div>
                                    <div className='popupmessagebox1part2'>
                                        <p className='popname'>{views1.toUpperCase()}</p>
                                        <p className='popprice'>${views2}.00</p>
                                        <p className='popcolor'>Colour: Aurora Black / Signal Orange / Dash Grey</p>
                                        <p className='popsize'>Size: {size}</p>
                                        <p className='popquantity'>Quantity: 1</p>
                                    </div>
                                </div>
                                <div className='popupmessagebox2'>
                                    <div className='popupmessagebox2upper'>
                                        <p className='popyourbag'>YOUR BAG</p>
                                        <p className='popyouritem'>{cart.length} Item</p>
                                        <div className='upper1'><p>Total Product Cost: </p><p className='upper1values1'> ${views2}.00</p></div>
                                        <div className='upper1'><p>Total Delivery Cost: </p><p className='upper1values2'>free</p></div>
                                    </div>
                                    <div className='popupmessagebox2lower'>
                                        <div className='upper2'><p>Total: </p><p className='upper2values1'> ${views2}.00</p></div>
                                        <div><p className='upper2values2'>(inclusive of tax)</p></div>
                                        <Link className='Links' to="/Cart"><button onClick={closepopup}className='popbutton1'>&nbsp;&nbsp;VIEW BAG<div>⟶&nbsp;&nbsp;&nbsp;</div></button></Link>
                                        <button className='popbutton2' onClick={closepopup}>&nbsp;&nbsp;CONTINUE SHOPPING<div>⟶&nbsp;&nbsp;&nbsp;</div></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='reviewbox'>
                    <div className='reviewbox1'>
                        <p className='reviewbox1heading'>Details</p>
                        <p className='subheading1'>EPIC ENERGY. LIGHTEST EVER.</p>
                        <p className='subheading2'>Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole,
                            a new generation of adidas BOOST.<br></br> Its unique molecule design achieves the lightest BOOST foam to date.
                            With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.</p>
                    </div>
                    <div className='reviewbox1'>
                        <p className='reviewbox1heading'>Technology.</p>
                        <p className='subheading1'>BOOST</p>
                        <p className='subheading2'>adidas Boost delivers sporty comfort to keep you going</p>
                        <p className='subheading1'>ENDLESS ENERGY, EVEN LIGHTERENDLESS ENERGY, EVEN LIGHTER</p>
                        <p className='subheading2'>Light Boost is our new generation of adidas Boost, 30% lighter with even more return.</p>
                        <p className='reviewbox1heading'>Highlights.</p>
                        <p className='subheading1'>ECO-FRIENDLY MADE.</p>
                        <p className='subheading1'>UPPER-sole</p>
                        <p className='subheading2'>Made in part with recycled materials, Ultraboost Light uses Primeknit+ FORGED technology to provide a cushy, sock-like fit that won't slip.</p>
                        <p className='subheading1'>CONTINENTAL™ RUBBER OUTSOLE</p>
                        <p className='subheading2'>adidas Boost delivers sporty comfort to keep you going</p>
                    </div>
                    </div>
                </div>
                    <div className='viewbox1part2'>
                        <p className='ratingsviews'>ADIDAS Originals <span className='ratingstarsymbol'>★★★☆☆</span></p>
                        <p className='viewPRdName'>{views1.toUpperCase()}</p>
                        <p className="mrpword">MRP :</p>
                        <span className="mrp">${views2}.00</span> <span className='mrpword1'>per pair</span><br></br>
                        <p className="mrpwordtax">(inclusive of all taxes)</p>
                        <p className='mrpwordcolor'>Colors</p>
                        <div className='productcolorbox'>
                            <img className='viewphotoforcolorselection' src={views} alt='adiddaslogo'></img>
                        </div>
                        <p className='mrpwordcolorlist'>Aurora Black / Signal Orange / Dash Grey</p>
                        <p className='mrpwordsize'>Sizes</p>
                        
    
                        <div className='sizeboxestable'>
                            {size === 3.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(3.5)}>3.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(3.5)}>3.5</button>}
                            {size === 4 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(4)}>4</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(4)}>4</button>}
                            {size === 4.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(4.5)}>4.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(4.5)}>4.5</button>}
                            {size === 5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(5)}>5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(5)}>5</button>}
                            {size === 5.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(5.5)}>5.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(5.5)}>5.5</button>}
                            {size === 6 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(6)}>6</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(6)}>6</button>}
                            {size === 6.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(6.5)}>6.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(6.5)}>6.5</button>}
                            {size === 7 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(7)}>7</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(7)}>7</button>}
                            {size === 7.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(7.5)}>7.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(7.5)}>7.5</button>}
                            {size === 8 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(8)}>8</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(8)}>8</button>}
                            {size === 8.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(8.5)}>8.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(8.5)}>8.5</button>}
                            {size === 9 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(9)}>9</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(9)}>9</button>}
                            {size === 9.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(9.5)}>9.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(9.5)}>9.5</button>}
                            {size === 10 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(10)}>10</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(10)}>10</button>}
                            {size === 10.5 ?<button className='sizeselectingbutton1' onClick={()=>sizecount(10.5)}>10.5</button> :<button className='sizeselectingbutton' onClick={()=>sizecount(10.5)}>10.5</button>}
                        </div>
                        <p className='stockmessge'>Stock's available</p>
                        <p className='stockmessge'>{errormsg}</p>
                        <div className='addingbox'>
                            <button className='addtocartmain' onClick={()=>addtocart(views1,size)}><span>&nbsp;&nbsp;&nbsp;ADD TO CART</span><div>⟶&nbsp;&nbsp;&nbsp;</div></button>
                            <div onClick={()=>addtowishlist(views1)} className='addtocartmainwhishlistbox'><img alt='adiddaslogo' src={wishlistheart} className='viewingpageheartbutton'></img></div>
                        </div>

                        
                        <div className='returndetails'>
                            <p>Free Delivery, Free Returns</p>
                            <p>COD available for orders below ₹5000</p>
                            <p>Secure transactions with hassle free 14 days Exchange and Returns</p>
                            <p>Save 5% on all Online Payments under Rs 5000/-</p>
                        </div>
                    </div>
                </div>}
        </div>
      )}
export default ViewingProducts