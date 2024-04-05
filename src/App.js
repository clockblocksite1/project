import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';
import Chart from './components/Chart';
import Table from './components/Table';
import Group from './components/Group';
import Portolio from './components/Portolio';
import Reg from './components/Reg';
import Kon from './components/Kon';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [coins,setCoins]=useState([])
  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    console.log(res.data)
    setCoins(res.data)
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Chart />
      <Table coins={coins}/>
      <Group />
      <Portolio />
      <Reg />
      <Kon />
    </div>
  );
}

export default App;