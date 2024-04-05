import React from 'react'
import "./Portfolio.css";
import iconImg from "./img/icon.png";
import icon1Img from "./img/icon (1).png";
import icon2Img from "./img/icon (2).png";
import icon3Img from "./img/icon (3).png";
import icon5Img from "./img/icon (4).png";
import icon6Img from "./img/icon (5).png"
function Portolio() {
  return (
    <div className='portfolio'>
 <img src={iconImg} alt='' className='icon'/>
 <div className='user'>User Safe Asset Fund</div>
 <div className='wourld'>(SAFU)world.</div>
 <div className='hot2'>Bitlist holds 10% of all trading fees </div>
 <div className='hot3'>In a protected asset fund to protect</div>
 <div className='hot4'>a portion of user funds.</div>
 <img src={icon1Img} alt='' className='hot5'/>
 <div className='user2'>User Access Control</div>
 <div className='hot6'>Personalized access control allows</div>
 <div className='hot7'>you to limit the devices and </div>
 <div className='hot8'>addresses that can access your</div>
 <div className='hot9'>account.</div>
 <img src={icon2Img} alt='' className='icon2'/>
 <div className='Improved'>Improved data encryption</div>
 <div className='hot10'>Your transaction data is encrypted </div>
 <div className='hot11'>- only you can access your </div>
 <div className='hot12'>personal data.</div>
 <img src={icon3Img} alt='' className='icon3'/>
 <div className='user4'>Support 24/7</div>
 <div className='hot13'>24/7 real-time support is always </div>
 <div className='hot14'>ready to help you.</div>
 <img src={icon5Img} alt='' className='icon5'/>
 <div className='hot15'>Fast replineshments </div>
 <div className='hot16'>and withdraws</div>
 <div className='hot17'>Transfer funds to and from your </div>
 <div className='hot18'>accounts quickly and easily.</div>
 <img src={icon6Img} alt='' className='icon6'/>
 <div className='user5'>Comfortable P2P platform</div>
 <div className='hot19'>Top up your account in any</div>
 <div className='hot20'>convenient way on the P2P </div>
 <div className='hot21'>platform at favorable rates.</div>
    </div>
  )
}

export default Portolio