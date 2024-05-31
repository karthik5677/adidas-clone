import React from 'react'
import { useState,storeState } from 'react'
import footer from './images/footer.jpg'
import { Link } from 'react-router-dom'
import { StoreState } from './StoreContext'
import whishheart from './images/heartlog1o.png'

function Men() {
  const{name,setName,total,setTotal,image,setImage,cart,setCart,views,setViews,views1,setViews1,views2,setViews2,productcatelog,setProductcatelog}=StoreState();

    function view(productphoto,productname,productprice){
        setViews(productphoto)
        setViews1(productname)
        setViews2(productprice)
        window.scrollTo(0,0);
    }
    const filteredcatelog = productcatelog.filter((a)=>a.category === "sports")
    const filteredcatelogpredator = productcatelog.filter((a)=>a.category === "sportspredator")
    const filteredcatelogcopa = productcatelog.filter((a)=>a.category === "sportscopa")

    return (
        <div className='womenswholepage'>
            {/* navigation */}
            <div className='webpagenavigation'>
                <button className='websitebackbutton' onClick={() => window.history.back()}>← Back</button>
                <Link to='/Home' className='Links'><p className='websitebackbutton'>Home</p></Link>
            </div>
            <div className='womenpageheader'>
                <p className='Womenpageheading'>SPORTS & RUNNING SHOES</p>
                <p className='womenheading1'>[{filteredcatelog.length}]</p>
            </div>
            <p className='womensubheading'>adidas sneakers for men sit right at the apex of where technology meets fashion in the world of superior<br></br>footwear. Do right by your feet every day, the 3-Stripes way</p>
            {/* productbox */}
            <div className='mainboxcatelog'>
                {filteredcatelog.map((a)=>
                    <Link to="/ViewingProducts" className='linkstoview'>
                        <button className='buttonforview' onClick={()=>view(a.image,a.name,a.Price)}>
                            <img src={whishheart} className='heartbuttonpng'></img>
                           <div className='prodbox' key={a.id}>
                             <p className='productprice'>${a.Price}.00</p>
                                <img className='productimage' src={a.image}></img>
                               {a.name}
                               <p className='grey'>originals</p>
                            </div>
                        </button>
                    </Link>
                )}
            </div>

            {/* predator section */}
            <div className='womenpageheader'>
                <p className='Womenpageheading'>PREDATOR Series</p>
                <p className='womenheading1'>[{filteredcatelogpredator.length}]</p>
            </div>
            <div className='mainboxcatelog'>
            {filteredcatelogpredator.map((a)=>
                    <Link to="/ViewingProducts" className='linkstoview'>
                        <button className='buttonforview' onClick={()=>view(a.image,a.name,a.Price)}>
                        <img src={whishheart} className='heartbuttonpng'></img>
                           <div className='prodbox' key={a.id}>
                             <p className='productprice'>${a.Price}.00</p>
                                <img className='productimage' src={a.image}></img>
                               {a.name}
                               <p className='grey'>originals</p>
                            </div>
                        </button>
                    </Link>
                )}
            </div>

            {/* copa section */}
            <div className='womenpageheader'>
                <p className='Womenpageheading'>COPA-SPORTS SHOES</p>
                <p className='womenheading1'>[{filteredcatelogcopa.length}]</p>
            </div>
            <div className='mainboxcatelog'>
            {filteredcatelogcopa.map((a)=>
                    <Link to="/ViewingProducts" className='linkstoview'>
                        <button className='buttonforview' onClick={()=>view(a.image,a.name,a.Price)}>
                        <img src={whishheart} className='heartbuttonpng'></img>
                           <div className='prodbox' key={a.id}>
                             <p className='productprice'>${a.Price}.00</p>
                                <img className='productimage' src={a.image}></img>
                               {a.name}
                               <p className='grey'>originals</p>
                            </div>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Men