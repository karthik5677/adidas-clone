import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/greentick.png'
import img2 from './images/homediagram.png'
import img3 from './images/plaintick.png'
import img4 from './images/truckdiagram.png'

function Confirmedorderpage() {
  return (
    <div className='Confirmedorderpage'>
        <div className='Confirmedorderpage1'>
            <p className='confirmorderhead1'>THANK YOU!</p>
            <img src={img1} className='greentickorderplaced'/>
            <p className='confirmorderhead2'><p className='confirmorderhead2text'>Your order has being processed</p></p>
            <p className='confirmorderhead3'>Order Number :AIN70HP000</p>
            <p className='confirmorderhead3'>You'll recieve a confirmation email shortly, The order will appear
             in your account as soon as you have received a confirmation mail.</p>
             <p className='confirmorderhead3'>While you wait on your delivery, you can always explore website for more gear.</p>
             <Link className='confirmorderhead4' to="/Home">GO TO HOMEPAGE  ⟶</Link>
             <p className='confirmorderhead3'>Want to cancel, You can do this up to 15 minutes after receiving your confirmation mail.</p>
             <p className='confirmorderhead5'>KNOW IMMEDIETLY WHERE YOUR ORDER STATUS CHANGES</p>
             <p className='confirmorderhead3'>scan the Qr code to download invoice or see your details in orders and returns page using assigned gmail.</p>
        </div>
        <div className='Confirmedorderpage2'>
            <p className='confirmorderhead1'>NEXT STEPS</p>
            <p className='confirmorderpage2head1'>
                <img src={img2} className='homeiconorderplaced'/>
                <p className='confirmorderpage2box'></p>
                <p>
                    <p className='confirmorderpage2boxhead1'>in Progress</p>
                    <p className='confirmorderpage2boxhead2'>Your order will be prepared at the<br></br> warehouse.</p>
                </p>
            </p>
            <p className='confirmorderpage2head1'>
                <img src={img4} className='homeiconorderplaced'/>
                <p className='confirmorderpage2box'></p>
                <p>
                    <p className='confirmorderpage2boxhead1'>On its way</p>
                    <p className='confirmorderpage2boxhead2'>When your order is shipped you'll recieve <br></br>an email with tracking details.</p>
                </p>
            </p>
            <p className='confirmorderpage2head1'>
                <img src={img3} className='homeiconorderplaced'/>
                <p className='confirmorderpage2box'></p>
                <p>
                    <p className='confirmorderpage2boxhead1'>Delivered</p>
                    <p className='confirmorderpage2boxhead2'>Your order will be delivered to the chosen <br></br>address or pick-up point </p>
                </p>
            </p>
            
        </div>
    </div>
  )
}

export default Confirmedorderpage