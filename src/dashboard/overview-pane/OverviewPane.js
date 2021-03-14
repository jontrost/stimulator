import React from 'react';
import TimeframeSelector from '../../reusable-components/timeframe-selector/TimeframeSelector';
import PriceGraph from '../../reusable-components/price-graph/PriceGraph';
import './OverviewPane.scss';

function OverviewPane() {
  return (
    <div className="overview-pane">
      <div className="total-value">$15436.50</div>
      <div className="change-in-value">+$1523.42 Today</div>
      <PriceGraph className="overview-graph"></PriceGraph>
      <TimeframeSelector></TimeframeSelector>
      <div className="available-cash">Available Cash $4593.02</div>
    </div>
  );
}

export default OverviewPane;
