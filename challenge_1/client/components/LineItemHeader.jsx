import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { datas } = props;
  const listOfHeaders = Object.keys(datas[0]);

  return (
    <tr className="headers">
      {
        listOfHeaders.length ? listOfHeaders
          .filter(header => header.indexOf('category') === -1)
          .map(fp => (
            <th>
              {fp.toUpperCase()}
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
