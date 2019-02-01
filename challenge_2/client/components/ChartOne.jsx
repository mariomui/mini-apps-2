// import Chart from 'chart.js';
import React, { Component } from 'react';


const { Line } = require('react-chartjs-2');

const chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          callback(label, index, labels) {
            return `$${label}`;
          },
        },
      },
    ],
  },
};

const data = {
  // labels: [1, 2, 3, 4, 5],
  datasets: [
    {
      label: 'BTC coin',
      fill: false,
      // data: [65, 59, 80, 81, 56],
    },
  ],
};


class ChartOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whoa: 'whoa',
    };
  }

  render() {
    const { xDatas, yDatas } = this.props;
    data.datasets[0].data = xDatas;
    data.labels = yDatas;
    return (
      <div>
        <Line data={data} options={chartOptions} width="600" height="250" />
      </div>
    );
  }
}

export default ChartOne;
