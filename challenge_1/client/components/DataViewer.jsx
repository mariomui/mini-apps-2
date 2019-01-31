import React, { Component } from 'react';
import LineItem from './LineItem.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: []
    };
  }

  render() {
    var firstpass = Object.keys(this.props.datas[0]);

    return (
      <tr>
        {
          firstpass.length ? firstpass.map(fp => (
            <th>
              {fp}
            </th>
          )) : null
        }
      </tr>
    );
  }
}

class DataViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  // category1: "By place"
  // category2: "Egypt"
  // date: "-300"
  // description: "Pyrrhus, the King of Epirus, is
  // taken as a hostage to Egypt after the Battle of Ipsus and
  // granularity: "year"
  // lang: "en"

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