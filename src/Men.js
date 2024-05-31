import React from 'react'
import { Link } from 'react-router-dom'
import { StoreState } from './StoreContext'
import whishheart from './images/heartlog1o.png'
// import whishheartblack from './images/Screenshot (18).png'

function Men() {
    const{setViews,setViews1,setViews2,productcatelog}=StoreState();
    function view(productphoto,productname,productprice){
        setViews(productphoto)
        setViews1(productname)
        setViews2(productprice)
        window.scrollTo(0,0);
    }
    const filteredcatelog = productcatelog.filter((a)=>a.category==="Mens")
    return (
        <div className='womenswholepage'>
            {/* navigation */}
            <div className='webpagenavigation'>
                <button className='websitebackbutton' onClick={() => window.history.back()}>← Back</button>
                <Link to='/Home' className='Links'><p className='websitebackbutton'>Home</p></Link>
            </div>
            <div className='womenpageheader'>
                <p className='Womenpageheading'>MEN SLIDES & SLIPPERS </p>
                <p className='womenheading1'>[{filteredcatelog.length}]</p>
            </div>
            <p className='womensubheading'>adidas sneakers for men sit right at the apex of where technology meets fashion in the world of superior<br></br>footwear. Do right by your feet every day, the 3-Stripes way</p>
            {/* productbox */}
            <div className='mainboxcatelog'>
                {filteredcatelog.map((a)=>
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
        </div>
    )
}

export default Men