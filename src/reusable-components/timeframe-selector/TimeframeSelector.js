import React from 'react';
import './TimeframeSelector.scss';

function TimeframeSelector() {
  return (
    <div className="timeframe-selector">
      <div className="timeframe-button">Day</div>
      <div className="timeframe-button">Week</div>
      <div className="timeframe-button">Month</div>
      <div className="timeframe-button">Year</div>
      <div className="timeframe-button">All Time</div>
    </div>
  );
}

export default TimeframeSelector;
