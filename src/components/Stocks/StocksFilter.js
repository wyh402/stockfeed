import "./StocksFilter.css";

function StocksFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="stocks-filter">
      <div className="stocks-filter__control">
        <label className="stocks-filter-label">FILTER BY YEAR:</label>
        <select
          className="stocks-filter-select"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default StocksFilter;
