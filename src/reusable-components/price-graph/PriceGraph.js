import React, {useEffect} from 'react';
import Chart from 'chart.js';
import './PriceGraph.scss';

function PriceGraph() {
  useEffect(() => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'Red',
              'Blue',
              'Yellow',
              'Green',
              'Purple',
              'Orange',
            ],
            borderColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            borderWidth: 1,
          },
        ],
      },
    });
  });

  return (
    <div className="price-graph">
      <canvas id="myChart" width="200" height="200"></canvas>
    </div>
  );
}

export default PriceGraph;
