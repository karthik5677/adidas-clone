import React, { useState } from 'react'
import Home from './Home';

function Produts() {

const [sh,SetSh]=useState(0);
const [tsh,SetTsh]=useState(0);
const [shq,SetShq]=useState(0);
const [price,SetPrice]=useState(0);

function Addshirts(){
  SetSh(sh+1);
  SetShq(shq+1);
}
function Minusshirts(){
  if(sh>0){
    SetSh(sh-1);
    SetShq(shq-1);
  }
} 
function Addt(){
  SetTsh(tsh+1);
  SetShq(shq+1);
}
function Minust(){
  if(tsh>0){
    SetTsh(tsh-1);
    SetShq(shq-1);
  }  

SetPrice(5);


};




























  return (
    <div> 
      <div className='product1'>
        <div className='products'>
          shirts
          <br></br>
          <h3>Add to cart</h3>
          <button onClick={Addshirts}>+</button>{sh}
          <button onClick={Minusshirts}>-</button>
          <button>Buy</button>
        </div>
        <div className='products'>
          T-shirts
          <br></br>
          <h3>Add to cart</h3>
          <button onClick={Addt}>+</button>{tsh}
          <button onClick={Minust}>-</button>
        </div>
        <div className='products'>
          Shoes
        </div>
  
        <div className='cart'>
        <h4>Your Bag</h4>
        Total({shq}item) {price}$ 
        </div>


      </div>
    </div>
  )
}

export default Produts;