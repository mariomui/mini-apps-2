import React from 'react';
const { objectFilter } = require('../../data/helpers/index.js');

function LineItem(props) {
  const { data } = props;
  const blacklist = ['category1', 'category2'];
  const util = Object.values(objectFilter(blacklist, data)).map((item) => {
    return (
      <td>
        {item}
      </td>
    );
  });
  return (
    <tr>
      {util}
    </tr>
  );
}

export default LineItem;