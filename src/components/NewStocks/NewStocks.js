import React, { useState } from "react";
import StocksForm from "./StocksForm";
import "./NewStocks.css";

function NewStocks(props) {
  const [isEditing, setIsEditing] = useState();
  const [industry, setIndustry] = useState("Agriculture");

  const saveStockDataHandler = (enteredStockData) => {
    const stockData = {
      ...enteredStockData,
      id: Math.random().toString(),
    };
    props.onAddStock(stockData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const industryChangeHandler = (selectedIndustry) => {
    setIndustry(selectedIndustry);
  };

  return (
    <div className="new-stock">
      {!isEditing && (
        <div>
          <button className="add-button" onClick={startEditingHandler}>
            <img
              src="plus-icon.png"
              width="20"
              height="20"
              className="add-logo"
            />
            <p>ADD STOCK</p>
          </button>
        </div>
      )}
      {isEditing && (
        <StocksForm
          onSaveStockData={saveStockDataHandler}
          onCancel={stopEditingHandler}
          onChangeFilter={industryChangeHandler}
          setIndustry={industry}
        />
      )}
    </div>
  );
}

export default NewStocks;
