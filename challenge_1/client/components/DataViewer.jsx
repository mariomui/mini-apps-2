import React, { Component } from 'react';
import LineItem from './LineItem.jsx';
import Header from './LineItemHeader.jsx';

class DataViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { datas } = this.props;
    const util = datas.map((data, k) => (
      <LineItem key={k} data={data} />
    ));

    return (
      <th>
        {datas.length > 0 ? <Header datas={datas} /> : null}
        {util}
      </th>
    );
  }
}
export default DataViewer;