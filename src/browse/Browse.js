import React from 'react';
import PriceGraph from '../reusable-components/price-graph/PriceGraph';
import './Browse.scss';

function Browse() {
  return (
    <div className="browse">
      <div className="search-bar">
        <input className="search-input"></input>
      </div>
      <div className="results">
        <PriceGraph
          chartId="browse1"
          data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartLabel="Price"
          profitable={true}></PriceGraph>
        <PriceGraph
          chartId="browse2"
          data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartLabel="Price2"
          profitable={true}></PriceGraph>
        <PriceGraph
          chartId="browse3"
          data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartLabel="Price3"
          profitable={true}></PriceGraph>
        <PriceGraph
          chartId="browse4"
          data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartLabel="Price4"
          profitable={true}></PriceGraph>
        <PriceGraph
          chartId="browse5"
          data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartLabel="Price5"
          profitable={true}></PriceGraph>
        <PriceGraph
          chartId="browse6"
          data={[123, 132, 142, 112, 101, 92, 56, 67, 55, 102, 104, 109]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartLabel="Price6"
          profitable={true}></PriceGraph>
      </div>
    </div>
  );
}

export default Browse;
