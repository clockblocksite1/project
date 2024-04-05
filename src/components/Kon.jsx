import React from 'react'
import "./Kon.css";
import logo1Img from "./img/logo (1).png";
import telegaImg from "./img/Vector (13).png";
 import facImg from "./img/Vector (14).png";
 import twitImg from "./img/Group 72.png"
function Kon() {
  return (
    <div className='kon'>
    <img src={logo1Img} alt='' className='logo1'/>
    <div className='shop'>
       <img src={telegaImg} alt=''/>
       <img src={facImg} alt=''/>
       <img src={twitImg} alt=''/>
    </div>
    <button className='rgi'>Register</button>
    <button className='we'>Log in</button>
    <div className='trade'>Trade</div>
    <div className='trade2'>P2P</div>
    <div className='trade3'>Partners</div>
    <div className='trade4'>Mining</div>
    <div className='trade5'>Academy</div>
    <div className='trade6'>Privacy policy</div>
    <div className='trade7'>Terms of rules</div>
    <div className='trade8'>Bitlist© All Rights Reserved</div>
    </div>
  )
}

export default Kon