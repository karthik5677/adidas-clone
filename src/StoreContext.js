import { createContext,useContext, useState } from "react";
// mens
import img2 from './images/1.avif'
import img3 from './images/2.jpg'
import img4 from './images/3.avif'
import img5 from './images/4.avif'
import img6 from './images/5.avif'
import img7 from './images/6.avif'
import img8 from './images/7.avif'
import img9 from './images/8.avif'
import img10 from './images/9.avif'
import img11 from './images/12.jpg'
import img12 from './images/10.avif'
import img13 from './images/11.jpg'
// womens
import img14 from './images/17.avif'
import img15 from './images/19.avif'
import img16 from './images/20.avif'
import img17 from './images/21.avif'
import img18 from './images/22.avif'
import img19 from './images/23.avif'
import img20 from './images/24.avif'
import img21 from './images/25.avif'
import img22 from './images/26.avif'
// sports
import img23 from './images/sports1.avif'
import img24 from './images/sports1a.avif'
import img25 from './images/sports2a.avif'
import img26 from './images/sports2b.avif'
import img27 from './images/sports2c.avif'
import img28 from './images/sports7.avif'
import img29 from './images/sports8.avif'
import img30 from './images/sports3.avif'
import img31 from './images/sports6.avif'
import img32 from './images/sports4.avif'
import img33 from './images/sports5.avif'
import img34 from './images/sports6.avif'
import img35 from './images/sports7.avif'
import img36 from './images/sports8.avif'
import img37 from './images/sports9.avif'
import img38 from './images/sports10.avif'
import img39 from './images/sports12.avif'
import img40 from './images/sports13.avif'
// hoodies
import img41 from './images/hoodies1.avif'
import img42 from './images/hoodies2.avif'
import img43 from './images/hoodies3.avif'
import img44 from './images/hoodies4.avif'











const Store = createContext();



function StoreContext({children}){

  // list of products

  const[productcatelog,setProductcatelog]=useState([
    {id:`${new Date()}`,name:"Adilette Clogs",Price:2299.00,image:img2,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Adilette Shower Slides I",Price:3799.00,image:img3,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Adilette comfort Slides",Price:8799.00,image:img4,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Adilette Shower Slides II",Price:5999.00,image:img5,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"NEW STAR INDOOR",Price:3999.00,image:img6,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"YEEZY shoes",Price:3499.00,image:img7,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"stan smith CS shoes",Price:8799.00,image:img8,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Rivalry Low shoes",Price:7999.00,image:img9,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Adidas Pro Model 74",Price:8799.00,image:img10,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Adidas Pro Model 84s",Price:11799.00,image:img11,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"StreetBall III Shoes",Price:8799.00,image:img12,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"StreetBall II Shoes",Price:5999.00,image:img13,category:"Mens",wishlist:"no"},
    {id:`${new Date()}`,name:"Women Sneaker II",Price:3499.00,image:img14,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"Women YEEZY shoes",Price:9899.00,image:img15,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"CUSHON Walking shoes",Price:10999.00,image:img16,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"CLOUFOAM Walking shoes",Price:13666.00,image:img17,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"Women CLOUDFOAM shoes",Price:15000.00,image:img18,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"SHEENWALK shoes",Price:6000.00,image:img19,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"CONTEM X Walking shoes",Price:5299.00,image:img20,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"GLADDETEWALK WALKING SHOES",Price:8899.00,image:img21,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"CELESWALK WALKING SHOES",Price:18999.00,image:img22,category:"Womens",wishlist:"no"},
    {id:`${new Date()}`,name:"CELESWALK Sports SHOES",Price:18999.00,image:img23,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"X SpeedFlow Ground Boots",Price:18999.00,image:img24,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"X-2 SpeedFlow Ground Boots",Price:18999.00,image:img25,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"SPEED-X Ground Boots",Price:18999.00,image:img26,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"X SpeedFlow Ground Boots",Price:18999.00,image:img27,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"ULTRA-FIRM Ground Boots",Price:18999.00,image:img28,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"X-X23 SpeedFlow Ground Boots",Price:18999.00,image:img29,category:"sports",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator Elite 2FG Firm Ground",Price:18999.00,image:img30,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator Elite 2FG Firm Ground",Price:18999.00,image:img31,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator 24 League Turf Boots",Price:18999.00,image:img32,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator Elite Turf Football Boots",Price:18999.00,image:img33,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator 24 Pro Firm Ground Boots",Price:18999.00,image:img34,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator Elite Firm Ground Football Boots",Price:18999.00,image:img35,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"Predator X-Firm Ground Boots",Price:18999.00,image:img36,category:"sportspredator",wishlist:"no"},
    {id:`${new Date()}`,name:"COPA Pure League Turf-s Boots",Price:18999.00,image:img37,category:"sportscopa",wishlist:"no"},
    {id:`${new Date()}`,name:"COPA Pure 2 Lague FG",Price:18999.00,image:img38,category:"sportscopa",wishlist:"no"},
    {id:`${new Date()}`,name:"COPA Pure League Turf Boots",Price:18999.00,image:img39,category:"sportscopa",wishlist:"no"},
    {id:`${new Date()}`,name:"COPA Pure Club Flexible Boots",Price:18999.00,image:img40,category:"sportscopa",wishlist:"no"},
    {id:`${new Date()}`,name:"ESSENTIALS HOODIE",Price:10999.00,image:img41,category:"hoodies",wishlist:"no"},
    {id:`${new Date()}`,name:"NEW ADIDAS Z.N.E. PREMIUM HOODIE",Price:17999.00,image:img42,category:"hoodies",wishlist:"no"},
    {id:`${new Date()}`,name:"BSC 3-STRIPES HOODED INSULATED JACKET",Price:999.00,image:img43,category:"hoodies",wishlist:"no"},
    {id:`${new Date()}`,name:"Y-3 TECH SILK ZIP HOODIE - 3-STRIPES",Price:599.00,image:img44,category:"hoodies",wishlist:"no"},
  ]);
  
  const[wishlist,setWhishlist]=useState([])
  const[activeStatus,setActiveStatus]=useState(0);
  const[name,setName]=useState("");
  const[total,setTotal]=useState();
  const[image,setImage]=useState();
  const[cart,setCart]=useState([]);
  const[orders,setOrders]=useState([]);
  const[catelog,setCatelog]=useState([]);
  const[userdetails,setUserdetails]=useState([]);
  const[userdetailsaddress,setUserdetailsaddress]=useState('');
  const[activeusername,setActiveUsername]=useState('');
  const[size,setSize]=useState(0)

  // for adding product to the viewingpage 
  const[views,setViews]=useState(0)
  const[views1,setViews1]=useState(0)
  const[views2,setViews2]=useState(0)

 



  
  return(
    <Store.Provider value={{
      name,setName,total,setTotal,orders,setOrders,
      image,setImage,cart,setCart,activeStatus,setActiveStatus,
      catelog,setCatelog,userdetails,setUserdetails,views,setViews,
      views1,setViews1,views2,setViews2,size,setSize,
      productcatelog,setProductcatelog,activeusername,setActiveUsername,wishlist,setWhishlist,userdetailsaddress,setUserdetailsaddress
      }}>
        {children}
    </Store.Provider>
  )
    
}
export const StoreState=()=>{
    return useContext(Store);
};
export default StoreContext;