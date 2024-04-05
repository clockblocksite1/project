import React from 'react';
import "./Chart.css";
import vecImg from "./img/Vector (8).png";
import illImg from "./img/ill.png";

function Chart() {
  return (
    <div className='Chart'>
      
      <img src={vecImg} alt='' className='vec'/>
      <div className='buy'>Buy, trade and store</div>
      <div className='crip'>cryptocurrencies</div>
      <div className='input-wrapper'>
        <div className='input-container'>
          <input className='put' placeholder='Example@gmail.com'  style={{ paddingLeft: '48px' }}/>
        </div>
        <button className='sig'>Sign in</button>
      </div>
      <img src={illImg} alt='' className='graf'/>
    </div>
  );
}

export default Chart;