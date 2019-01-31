// import Chart from 'chart.js';
import React, { Component } from 'react';

const LineChart = require('react-chartjs').Line;

const chartOptions = {
  bezierCurve: false,
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  label: 'My First dataset',
  fillColor: 'rgba(220,220,220,0.2)',
  strokeColor: 'rgba(220,220,220,1)',
  pointColor: 'rgba(220,220,220,1)',
  pointStrokeColor: '#fff',
  pointHighlightFill: '#fff',
  pointHighlightStroke: 'rgba(220,220,220,1)',
  data: [65, 59, 80, 81, 56, 55, 40],

};


class ChartOne extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <LineChart data={data} options={chartOptions} width="600" height="250" />
      </div>
    );
  }
}

export default ChartOne;
