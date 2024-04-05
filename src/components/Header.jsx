import React from 'react';
import "./Header.css";
import logoImg from "./img/logo.png";
import searchImg from "./img/search-lg.png";

function Header() {
  return (
    <div className='Header'>
      <img src={logoImg} alt='' className='img'/>
      <div className='search-container'>
        <input className='hot' placeholder='Search' />
        <img src={searchImg} alt='' className='search-icon'/>
      </div>
      <div className='lg'>
        <div>Trade</div>
        <div>P2P</div>
        <div>Partners</div>
        <div>Mining</div>
        <div>Academy</div>
      </div>
      <button className='registr'>Register</button>
      <button className='Log'>Log in</button>
    </div>
  )
}

export default Header;