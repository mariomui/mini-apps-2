import React from 'react';
import Search from './Search.jsx';
import DataViewer from './DataViewer.jsx';
const axios = require('axios');
import '../../dist/main.css';
import ReactPaginate from 'react-paginate';
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
    debugger;
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
    const tableCss = {
      border: '1px solid black',
      color: 'blue',
      margin: '1px'
    }

    return (
      <div>
        <table className="data-table">

          <Search clearSearch={''} handleSubmit={this.handleSubmit} />

          <tbody>
            <DataViewer pageCount={pageCount} datas={datas} />

            <tr>
              <td style={tableCss} id="react-paginate">
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                  onPageChange={this.handlePageClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div >
    );
  }
}

export default App;
