import React, { useState } from "react";
import "./StocksForm.css";

function StocksForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredIndustry, setEnteredIndustry] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const industryChangeHandler = (event) => {
    setEnteredIndustry(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const stockData = {
      title: +enteredTitle,
      amount: enteredAmount,
      industry: enteredIndustry,
      date: new Date(enteredDate), //parse date string into object
    };

    props.onSaveStockData(stockData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredIndustry("");
    setEnteredDate("");
  };

  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="form-element">
          <label>Company Name</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>Industry</label>
          <select
            className="industry-select"
            value={props.setIndustry}
            onChange={dropDownChangeHandler}
          >
            <option value="Agriculture">Agriculture</option>
            <option value="Biology">Biology</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Energy">Energy</option>
            <option value="Technology">Technology</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-element">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Done</button>
      </div>
    </form>
  );
}

export default StocksForm;
