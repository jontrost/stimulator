import React from 'react';
import TimeframeSelector from '../../reusable-components/timeframe-selector/TimeframeSelector';
import PriceGraph from '../../reusable-components/price-graph/PriceGraph';
import './OverviewPane.scss';

function OverviewPane() {
  return (
    <div className="overview-pane">
      <div className="total-value">$15436.50</div>
      <div className="change-in-value">+$1523.42 Today</div>
      <PriceGraph className="overview-graph"
        chartId="overview-chart"
        data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}></PriceGraph>
      <TimeframeSelector></TimeframeSelector>
      <div className="available-cash">Available Cash $4593.02</div>
    </div>
  );
}

export default OverviewPane;
