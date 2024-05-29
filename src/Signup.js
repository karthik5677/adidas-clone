import { StoreState } from './StoreContext'
import React, { useState } from 'react'


function Signup() {
  const{userdetails,setUserdetails,activeusername,setActiveusername}=StoreState();



  return (
    <div>
      {userdetails.length}
      {userdetails.map((a)=>
      <div key={a.id}>{a.username}{a.userpassword}</div>)}
      <div>
            
          </div>
    </div>
  )
}

export default Signup


