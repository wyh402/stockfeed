import React, { useState } from "react";
import "./StocksForm.css";

function StocksForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredIndustry, setEnteredIndustry] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const isValidInput =
    enteredTitle && enteredAmount && enteredIndustry && enteredDate;

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isValidInput) {
      props.onCancel();
      return;
    }
    const stockData = {
      title: enteredTitle,
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

  const industryChangeHandler = (event) => {
    setEnteredIndustry(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="form-element">
          <label className="form-label">Company Name</label>
          <input
            className="forms-input"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form-element">
          <label className="form-label">Amount</label>
          <input
            className="forms-input"
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-element">
          <label className="form-label">Industry</label>
          <select
            className="forms-input"
            value={props.setIndustry}
            onChange={industryChangeHandler}
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
          <label className="form-label">Date</label>
          <input
            className="forms-input"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="form-buttons-container">
          <button
            type="button"
            onClick={props.onCancel}
            className="form-button form-button-cancel"
          >
            Cancel
          </button>
          <button type="submit" className="form-button">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default StocksForm;
