import React, { useState } from 'react'
import img1 from './images/debitcrd.jpg'

function Debitcrd() {
    const [a,setA]=useState();

    function print(e){
      setA(e)
    }





  return (
    <div>
      <p className='cardnumber'>{a}</p>
      <img className='debitcardimage' src={img1} alt='adiddaslogo'></img>
      
      
      <input type='number' onChange={(e)=>print(e.target.value)}></input>
      
        
    </div>
    
  )
}

export default Debitcrd