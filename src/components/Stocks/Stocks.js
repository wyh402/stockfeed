import React, { useState } from "react";

import "./Stocks.css";
import StocksFilter from "./StocksFilter";
import StocksChart from "./StocksChart";
import StocksList from "./StocksList";

function Stocks(props) {
    const [filteredYear, setFilteredYear] = useState("All");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredStocks = props.stocks.filter((stock)=>{
        if (filteredYear === "All") {
            return new Boolean(true);
        } else {
            return stock.date.getFullYear().toString() === filteredYear;
        }
    })

    return (
      <div className="stocks-container">
          <StocksFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></StocksFilter>
          <StocksChart stocks={filteredStocks}></StocksChart>
          <StocksList items={filteredStocks}></StocksList>
      </div>
    );
  }

export default Stocks;