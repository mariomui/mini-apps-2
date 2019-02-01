import React from 'react';
import axios from 'axios';
import ChartOne from './components/ChartOne';
import DatePicker from './components/DatePicker';
import '../dist/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xDatas: [],
      yDatas: [],
      fromDate: 0,
      toDate: 0,
    };
  }

  componentDidMount() {
    axios.get('/api/data')
      .then((datas) => {
        console.log(datas.data, 'hi');
        this.setState({
          xDatas: datas.data.bpi,
          yDatas: datas.data.bpi,
        });
      });
  }

  collectInfo = (start, end) => {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    const options = {
      method: 'get',
      params: {
        start,
        end,
      },
    };
    var storage = window.sessionStorage;
    var cacheKey = `${start}${end}`;
    if (storage.getItem(cacheKey)) {
      var cacheResult = storage.getItem(cacheKey);
      this.setState({
        xDatas: cacheResult,
        yDatas: cacheResult
      })
    } else {
      axios.get(url, options)
        .then((datas) => {
          console.log(datas.data, 'hi');
          storage.setItem(cacheKey, datas.data.bpi);
          this.setState({
            xDatas: datas.data.bpi,
            yDatas: datas.data.bpi,
          });
        });
    }
  }

  handleSubmit = (e, from, to) => {
    e.preventDefault();
    this.setState({
      fromDate: from,
      toDate: to
    });
    this.collectInfo(from, to);
  }


  render() {
    const { xDatas, yDatas, toDate, fromDate } = this.state;
    return (
      <div>
        <DatePicker handleSubmit={this.handleSubmit} />
        <ChartOne toDate={toDate} fromDate={fromDate} xDatas={Object.values(xDatas)} yDatas={Object.keys(yDatas)} />
      </div>

    );
  }
}

export default App;
