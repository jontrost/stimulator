import React from 'react';
import './OverviewPane.scss';

function OverviewPane() {
  return (
    <div className="overview-pane">
      <div className="total-value">$15436.50</div>
      <div className="change-in-value">+$1523.42 Today</div>
      <div className="overview-graph"></div>
      <div className="timeframe-selector"></div>
      <div className="available-cash"></div>
    </div>
  );
}

export default OverviewPane;
