import React, {useEffect} from 'react';
import Chart from 'chart.js';
import './PriceGraph.scss';

function PriceGraph(props) {
  useEffect(() => {
    const ctx = document.getElementById(props.chartId);
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontFamily = '"Quicksand", sans-serif';
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: props.labels,
        datasets: [
          {
            label: props.chartLabel,
            lineTension: 0,
            fill: true,
            data: props.data,
            borderColor: props.profitable ? 'rgba(0, 255, 0, 1)' : 'rgba(0, 255, 0, 1)',
            backgroundColor: props.profitable ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
            pointBackgroundColor: props.profitable ? 'rgba(0, 255, 0, 1)' : 'rgba(0, 255, 0, 1)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          titleFontFamily: '"Quicksand", sans-serif',
          bodyFontFamily: '"Quicksand", sans-serif',
        },
      },
    });
  });

  return (
    <div className={props.className}>
      <canvas id={props.chartId}></canvas>
    </div>
  );
}

export default PriceGraph;
