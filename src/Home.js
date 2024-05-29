
import img101 from './images/241264.jpg'
import img102 from './images/241264.jpg'
import img111 from './images/06_09_2023-adidas_shoes_under_3000_23523270.jpg'
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';
import { StoreState } from './StoreContext';


function Home() {
  
  const{activeStatus,setActiveStatus,productcatelog,setProductcatelog}=StoreState();
 
  return (
    <div>
      
      <div className='home32'>
        <p className='shopnow'>SHOP NOW?</p>
        <Link  to="/Men"><p className='homebannertext1'>MEN ⟶</p></Link>
        <Link className='Links' to="/Women"><p className='homebannertext2'>WOMEN ⟶</p></Link>
        <Link to='/Sports'><img  className='banner2' src={img101}/></Link>
        {/* hoodies box */}
        {/* <div className='hoodiebox1'>
          {productcatelog.map((a)=><div className='hoodiebox1-a'>{}</div>)}
          
        </div> */}
        {activeStatus === 0 && <div>
        <div className='yellow'>SIGNUP AND GET 15% OFF<Link className='Links' to="/Logging"><button className='checkoutbutton2'>SIGN UP ➔</button></Link></div>
      </div>}    

      <div className='home'>
        <div className='home1'>
          <p className='offer'>EXTRA 20% OFF ON <br></br>
          ORDERS ABOVE INR 5499</p>
          <p className='offer2'>*Maximum discount of INR 2000</p>
        </div>
        <div>
          <img className='wallpaper1' src={img111}></img>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Home