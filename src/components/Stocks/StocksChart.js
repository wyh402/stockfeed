import "./StocksChart.css";
import Chart from "./Chart/Chart"

function StocksChart(props) {
  const isYearInvalid = props.selectedYear === "All";

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const stock of props.stocks) {
    const stockMonth = stock.date.getMonth();
    chartDataPoints[stockMonth].value += stock.amount;
  }

  return <div className="chart-container">
    {!isYearInvalid && <Chart dataPoints={chartDataPoints}/>}
  </div>
}

export default StocksChart;
