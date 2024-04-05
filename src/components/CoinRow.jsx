import React from 'react';

function CoinRow({ coin, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "3%" }}
        />
        <span>{coin.name}</span>
        <span className="ms-3 text-uppercase" style={{ color: '#525A71' }}>{coin.symbol}</span>
      </td>
      <td>${coin.current_price}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>
        {coin.total_volume.toLocaleString()}M
      </td>
      <td style={{ verticalAlign: 'middle' }}>
        <button className="trade-button">Trade</button>
      </td>
    </tr>
  );
}

export default CoinRow;