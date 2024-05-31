import { StoreState } from './StoreContext'
import React from 'react'


function Signup() {
  const{userdetails}=StoreState();



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


