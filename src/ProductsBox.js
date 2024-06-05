import img2 from './images/13.avif'
import img3 from './images/14.avif'
import img4 from './images/15.avif'
import img5 from './images/16.avif'
import React from 'react'
function ProductsBox() {
  return (
    <div>
      <p className='carttoppicks'>TOP PICKS FRO YOU</p>
      <div className='CARTrecomdationswrap'>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img2} alt='adiddaslogo'></img>NEW STAR INDOOR</div>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img3} alt='adiddaslogo'></img>YEEZY shoes</div>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img4} alt='adiddaslogo'></img>stan smith CS shoes</div>
        <div className='CARTrecomdationsobj'><img className='CARTrecomdationsobj1' src={img5} alt='adiddaslogo'></img>Rivalry Low shoes</div> 
    </div>
    <div>
    </div>
    </div>
  )
}
export default ProductsBox