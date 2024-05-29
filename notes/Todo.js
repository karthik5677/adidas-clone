import React, { useState } from 'react'

function Todo() {
    const a=[{id:1,name:"karthik"},{id:2,name:"pram"}]
    const[data,setData]=useState(a);







  return (
    <div>
        <ul>
            {data.map((get)=><li key={get.id}>{get.name}</li>)}
            
        </ul>
    </div>
  );
}

export default Todo;