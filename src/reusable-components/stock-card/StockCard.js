import React from 'react';
import PriceGraph from '../price-graph/PriceGraph';
import './StockCard.scss';

function StockCard(props) {
  return (
    <div className="stock-card">
      <div className="stock-card-symbol">{props.symbol}</div>
      <PriceGraph
        data={props.data}
        labels={props.labels}
        chartLabel={props.chartLabel}
        profitable={props.profitable}>
      </PriceGraph>
    </div>
  );
}

export default StockCard;
