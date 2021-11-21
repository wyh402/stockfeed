import React, { useState } from "react";
import StockDate from "./StockDate"

import "./StockItem.css";

function StockItem(props) {
  return (
    <div className="stock-item">
        <StockDate date={props.date}></StockDate>
        <div className="stock-item-description">
            <p className="stock-item-title">{props.title}</p>
            <div className="stock-item-amount">
                <p>${props.amount}</p>
            </div>
        </div>
    </div>
  );
}

export default StockItem;