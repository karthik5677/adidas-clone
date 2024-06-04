
import img101 from './images/241264.jpg'
import img1 from './images/whatsappwhite-black.png'
import img2 from './images/instagramiconblackwhite.jpg'
import {Link } from 'react-router-dom';
import { StoreState } from './StoreContext';
import whishheart from './images/heartlog1o.png'
import yeezy3 from './images/487214_00_png_800x.webp'


function Home() {

  const{activeStatus,productcatelog,setViews,setViews1,setViews2}=StoreState();
  const filteredproduct =productcatelog.filter((a)=> a.category ==="hoodies")
  function view(productphoto,productname,productprice){
    setViews(productphoto)
    setViews1(productname)
    setViews2(productprice)
    window.scrollTo(0,0);
}

  return (
    <div>
      
      <div className='home32'>
        <p className='shopnow'>SHOP NOW?</p>
        <p className='shopnowsubheading'>NEW ARRIVALS Sports- COPA & PREDATOR SERIES AVAILABLE, CHECKOUT ON THE SPORTS CATEGORY PAGE.</p>
        <Link  to="/Men"><p className='homebannertext1'>MEN ⟶</p></Link>
        <Link className='Links' to="/Women"><p className='homebannertext2'>WOMEN ⟶</p></Link>
        <Link to='/Sports' ><img  className='banner2' src={img101} alt='adiddaslogo'/></Link>
        {/* hoodies box */}
        <div className='hoodiesheadingheader'>
          <div className='hoodiesheading'>MEN HOODIES</div>
          <Link  to="/Sports" className='linkstoview'><div className='hoodiesheading'>SPORTS</div></Link>
        </div> 
        <div className='hoodiebox1'>
          {filteredproduct.map((a)=>
            <Link to="/ViewingProducts" className='linkstoview'>
              <button className='buttonforview' onClick={()=>view(a.image,a.name,a.Price)}>
                <img src={whishheart} className='heartbuttonpng' alt='adiddaslogo'></img>
                <div className='prodbox' key={a.id}>
                  <p className='productprice'>${a.Price}.00</p>
                  <img className='productimage' src={a.image} alt='adiddaslogo'></img>
                  {a.name}
                  <p className='grey'>originals</p>
                </div>
              </button>
            </Link>
          )}
        </div>

        {activeStatus === 0 && 
        <div>
          <div className='yellow'>SIGNUP AND GET 15% OFF<Link className='Links' to="/Logging"><button className='checkoutbutton2'>SIGN UP ➔</button></Link></div>
        </div>}
        <div className='home2'>
          <div className='home2greayheader'>YEEZY SHOES COLLECTION AVAILABLE</div>
        <img className='yeezyshoe' src={yeezy3} alt='adidasimg'/>
          <p className='yeezyshoeadidas' >YEEZY BOOST 700 V2 <br></br>TEPHRA</p>
          <p className='yeezyshoeadidas1' >The YEEZY BOOST 700 V2 Tephra features an upper composed of beige 
          textile/canvas and premium leather with beige nubuck and suede overlays,
           with reflective details throughout.</p>
        </div>    

      <div className='home'>
        <p className='footeraboverarea-a'>MEN'S CLOTHING & SHOES</p>
        <p className='footeraboverarea-b'>This website is made by me- karthik M , more than just lines of code – it's a reflection of my skills, 
        aspirations, and commitment to excellence. From the sleek design to the seamless functionality, every aspect has been 
        carefully crafted with attention to detail. Explore, engage, and discover the essence of
        my work as you navigate through these digital realms. <br></br>From athletes to streetwear enthusiasts,
        adidas men’s clothing and shoes exist to let you go harder, dig deeper, 
        and get the most out of yourself, from the pitch to the street to the road less traveled.</p>
        <p className='footeraboverarea-c'>CONTACT INFO</p>
        <a href='https://www.instagram.com/thalakarthii?igsh=OTM1ZDB1cWM3a2Qw'><img  className='footericons-b' src={img2} alt='adiddaslogo'/></a>
        <a href='https://wa.me/qr/PXO4ZYNMF2HME1'><img  className='footericons' src={img1} alt='adiddaslogo'/></a>
      </div>
      </div>
    </div>
  )
}
export default Home