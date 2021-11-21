import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Stocks from "./components/Stocks/Stocks";
import NewStocks from "./components/NewStocks/NewStocks";

const DUMMY_STOCKS = [
  {
    id: "e1",
    title: "ADM",
    industry: "agriculture",
    amount: 94.12,
    date: new Date(2021, 8, 14),
  },
  {
    id: "e2",
    title: "Apple",
    industry: "technology",
    amount: 400.27,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "NextEra Energy",
    industry: "energy",
    amount: 150,
    date: new Date(2020, 5, 12),
  },
];

function App() {

  const [stocks, setStocks] = useState(DUMMY_STOCKS);
  
  const addStockHandler = (stock) => {
    setStocks((prevStocks)=>{
      return [stock, ...prevStocks]
    });
  };

  return (
    <div className="body-container">
      <Header className="header"></Header>
      <NewStocks onAddStock={addStockHandler}></NewStocks>
      <Stocks className="stocks" stocks={stocks}></Stocks>
    </div>
  );
}

export default App;
