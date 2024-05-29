import React, { useState } from 'react'
import img1 from './images/debitcrd.jpg'

function Debitcrd() {
    const [a,setA]=useState();
    const [len,setLen]=useState(0);
    const [lenspace,setLenspace]=useState("k");

    function print(e){
      setA(e)
    }





  return (
    <div>
      <p className='cardnumber'>{a}</p>
      <img className='debitcardimage' src={img1}></img>
      
      
      <input type='number' onChange={(e)=>print(e.target.value)}></input>
      
        
    </div>
    
  )
}

export default Debitcrd