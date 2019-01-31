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
      page: 0,
      datas: [],
      offset: 0,
      test: 0
    };
  }

  handleSubmit = (e, searchTerm) => {
    // this.loadCommentsFromServer();
    e.preventDefault();

    console.log('hi');
    this.setState({
      searchTerm,
    }, this.handleCollectInfo());
  };
  //localhost:3000/events/?q=pilgrim&page=7&limit=14

  handleCollectInfo() {
    const { page } = this.props;
    axios.get(url + `/?q=${this.state.searchTerm}&page=${page}&_limit=${10}`).
      then((datas) => {
        this.setState({
          datas: datas.data,
          page: 1,
          pageCount: Number(datas.headers['x-total-count']),
        });
      })
  }

  handlePageClick = data => {
    let selected = data.selected;
    console.log(selected, 'sel');
    let offset = Math.ceil(selected * 10);

    this.setState({
      test: offset
    })
  }

  render() {
    console.log('we made a change')
    const { pageCount, page, datas } = this.state;
    return (
      <div>
        <h1>{this.state.toby}</h1>
        <table className="data-table">
          <thead>
            <tr>
              <td>
                <Search url={url} handleSubmit={this.handleSubmit} />
              </td>
            </tr>
          </thead>
          <tbody>
            <DataViewer page={page} datas={datas} />

            <tr>
              <td style={{ border: '1px solid black', color: 'blue', margin: '1px' }} id="react-paginate">
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={3}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                  onPageChange={this.handlePageClick}
                  on
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
