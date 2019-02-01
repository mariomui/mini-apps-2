import React from 'react';
import Search from './Search.jsx';
import Paginator from './Paginator';
import DataViewer from './DataViewer.jsx';
const axios = require('axios');
import '../../dist/main.css';
const url = '/events';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      datas: [],
      offset: 0,
      perPage: 10,
      pageCount: 0
    };
  }

  handleSubmit = (e, searchTerm) => {
    // this.loadCommentsFromServer();
    e.preventDefault();

    console.log('hi');
    this.setState({
      searchTerm,
    }, this.handleCollectInfo(searchTerm));
  };
  //localhost:3000/events/?q=pilgrim&page=7&limit=14

  handleCollectInfo = (searchTerm) => {
    const { offset, perPage, pageCount } = this.state;
    const query = url + `/?q=${searchTerm}&_start=${offset}&_end=${offset + 10}`;

    axios.get(query)
      .then((datas) => {
        var stateCollector = {};

        var oldState = this.state;

        var newState = {
          datas: datas.data,
          pageCount: Math.ceil(+datas.headers['x-total-count'] / perPage),
        }

        Object.assign(stateCollector, oldState, newState);

        this.setState(stateCollector, () => {
          console.log(pageCount, 'pageCount');
        });
      })
  }

  handlePageClick = data => {
    const { perPage, searchTerm } = this.state;
    const { selected } = data;

    let offset = Math.ceil(selected * perPage);

    this.setState({
      offset: offset
    }, () => {
      this.handleCollectInfo(searchTerm);
    })
  }

  render() {
    const { pageCount, datas } = this.state;

    return (
      <div>
        <table className="data-table">
          <thead>
            <Search
              clearSearch={''}
              handleSubmit={this.handleSubmit}
            />
          </thead>
          <tbody>
            <DataViewer
              pageCount={pageCount}
              datas={datas}
            />
            <Paginator pageCount={pageCount}
              handlePageClick={this.handlePageClick}
              minShownPagers={10}
            />
          </tbody>
        </table>
      </div >
    );
  }
}

export default App;
