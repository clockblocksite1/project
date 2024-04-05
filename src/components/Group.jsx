import React from 'react'
import "./Group.css";
import binanceImg from "./img/path16.png";
import bitfinexImg from "./img/Vector (9).png";
import krakenImg from "./img/Vector (10).png";
import bybitImg from "./img/Group 338887.png";
import cryptoImg from "./img/Vector (11).png";
import coinbaseImg from "./img/Vector (12).png"
function Group() {
  return (
    <div className='group'>
        <div className='bit'>Bitles is your reliable guide in</div>
        <div className='the'>the world of digital assets</div>
        <div className='the2'>The Bitles app is a comprehensive solution for trading digital assets. Buy </div>
        <div className='and'>and sell cryptocurrencies quickly and openly, comfortably and safely from </div>
        <div className='any'>anywhere in the world.</div>
        <img src={binanceImg} alt='' className='binance'/>
        <img src={bitfinexImg} alt='' className='bitfinex'/>
        <img src={krakenImg} alt='' className='kraken'/>
        <img src={bybitImg} alt='' className='bybit'/>
        <img src={cryptoImg} alt='' className='crypto'/>
        <img src={coinbaseImg} alt='' className='coinbase'/>
    </div>
  )
}

export default Group