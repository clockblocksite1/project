import React, { useRef } from 'react';
import './Table.css';
import CoinRow from './CoinRow';
const titles = ['#', 'Asset', 'Price', ' Change', ' Volume'];
function Table({ coins }) {
  const titleStyle = {
    fontSize: '16px',
    color: '#6D799C',
  };
  const tableEndRef = useRef(null);
  const scrollToBottom = () => {
    const scrollIncrement = 100; 
    const table = document.querySelector('.tab');
    if (table) {
      table.scrollTop += scrollIncrement;
    }
  };
  return (
    <div className='t'>
      <div className='tab' style={{ width: '1600px', height: '523px',overflowY: 'auto', marginLeft: '160px', }}>
        <table className='table table-dark mt-4 table-hover'>
          <thead>
            <tr>
              {titles.map((title, index) => (
                <th key={index} style={titleStyle}>{title}</th>
              ))}
              <th style={{ width: '82px', border: '1px solid #2FBDFC' }}>
                <button style={{ width: '82px', height: '34px', border: 'none', background: 'transparent' }}>Trade</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <CoinRow coin={coin} key={index} index={index + 1} />
            ))}
            <tr ref={tableEndRef}></tr>
          </tbody>
        </table>
      </div>
      <button 
        className="all-assets-button" 
        onClick={scrollToBottom}
        style={{
          width: '1600px',
          height: '42px',
          borderRadius: '8px',
          border: '1px solid #CEE7FF',
          background: '#26314E',
          border: 'none',
          color: '#CEE7FF',
          marginBottom: '20px',
          marginLeft: '160px' ,
          marginTop:'16px'

        }}
      >
        All Assets
      </button>
    </div>
  );
}

export default Table;