import react, { useState } from 'react'
import { StoreState } from '../src/StoreContext'


function viewingProduct() {


const{views,setViews,views1,setViews1,views2,setViews2,cart,setCart,size,setSize}=StoreState();



function sizecount(e){
    setSize(e)
 }
function addtocart(){
    if(size.length===0){
        setSize("not defined")
    }
    else{
        const a= {id:`${new Date()}`,product:views1,price:views2,image:views,size:size}
        setCart([...cart,a])
        setSize("")
    }
    
}


  return (
    <div>
        {views.length > 0 &&
        <div className='viewbox1'>
                <div className='viewbox1part1'>
                    <img className='viewphoto' src={views}></img>
                    <img className='viewphotomirrored' src={views}></img>
                </div>
                <div className='viewbox1part2'>
                    <p className='ratingsviews'>ADIDAS Originals <span className='ratingstarsymbol'>★★★☆☆</span></p>
                    <p className='viewPRdName'>{views1.toUpperCase()}</p>
                    <p className="mrpword">MRP :</p>
                    <span className="mrp">${views2}.00</span> <span className='mrpword1'>per pair</span><br></br>
                    <p className="mrpwordtax">(inclusive of all taxes)</p>
                    <p className='mrpwordcolor'>Colors</p>
                    <div className='productcolorbox'>
                        <img className='viewphotoforcolorselection' src={views}></img>
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

                    <p className='stockmessge'>Stock available</p>

                    <div className='addingbox'>
                        <button className='addtocartmain' onClick={addtocart}><span>&nbsp;&nbsp;&nbsp;ADD TO CART</span><div>⟶&nbsp;&nbsp;&nbsp;</div></button><div className='addtocartmainwhishlistbox'>⬆</div>
                    </div>
                    <div className='returndetails'>
                        <p>Free Delivery, Free Returns</p>
                        <p>COD available for orders below ₹5000</p>
                        <p>Secure transactions with hassle free 14 days Exchange and Returns</p>
                        <p>Save 5% on all Online Payments under Rs 5000/-</p>
                    </div>
                </div>
            </div>
        }
        
    </div>
  )
}

export default viewingProduct
