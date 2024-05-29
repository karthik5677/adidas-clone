import { StoreState } from './StoreContext'
import img2 from './images/13.avif'
import img3 from './images/14.avif'
import img4 from './images/15.avif'
import img5 from './images/16.avif'
import React, { useState } from 'react'

function ProductsBox() {

  // const loopArray = ['NEW STAR INDOOR', 'YEEZY shoes', 'stan smith CS shoes', 'Rivalry Low shoes'];
  // const loopArray1 = [12,22,32,42];

  // // const{catelog,setCatelog}=StoreState();
  // // const a=[{id:1,name:'erek'},{id:1,name:'erek2'}]
  // // setCatelog([...catelog,a])



  // function Add(pId,pName,pPrice,pImage){ 
    

  //   // setName(pName)
  //   // setPrice(pPrice)
  //   // setImage(pImage)

  //   // const a= {id:`${new Date()}`,product:name,price:price,image:image}
  //   // setCart([...cart,a])
    
  // }


  return (
    <div>
      {/* <p className='youmayalsolike'>YOU MAY ALSO LIKE</p> */}
      <p className='carttoppicks'>TOP PICKS FRO YOU</p>
      <div className='CARTrecomdationswrap'>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img2}></img>NEW STAR INDOOR</div>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img3}></img>YEEZY shoes</div>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img4}></img>stan smith CS shoes</div>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img5}></img>Rivalry Low shoes</div> 
    </div>
    <div>

    </div>

    


    </div>
    
    
  )
}

export default ProductsBox