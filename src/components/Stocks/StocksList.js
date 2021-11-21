import "./StocksList.css"
import StockItem from "./StockItem"

function StocksList(props) {
    if (props.items.length === 0) {
        return <p className="stocks-list__fallback">No stocks found.</p>
    }

    return <ul className="stocks-list">
      {
          props.items.map((stock) => (
            <StockItem
              key={stock.id}
              title={stock.title}
              industry={stock.industry}
              amount={stock.amount}
              date={stock.date}
            />
          ))
      }
  </ul>
  }

export default StocksList;