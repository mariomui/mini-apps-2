import React, { Component } from 'react';

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

export default Header;