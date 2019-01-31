import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { datas } = props;
  const listOfHeaders = Object.keys(datas[0]);

  return (
    <tr>
      {
        listOfHeaders.length ? listOfHeaders.map(fp => (
          <th>
            {fp}
          </th>
        )) : null
      }
    </tr>
  );
}

Header.propTypes = {
  datas: PropTypes.array.isRequired,
};

export default Header;
