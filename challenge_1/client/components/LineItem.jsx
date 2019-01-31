import React from 'react';

function LineItem(props) {
  const { category1, category2, date, description, granularity, lang } = props.data;

  return (
    <tr>
      <td>
        {category1}
      </td>
      <td>
        {category2}
      </td>
      <td>
        {date}
      </td>
      <td>
        {description}
      </td>
      <td>
        {granularity}
      </td>
      <td>
        {lang}
      </td>
    </tr>

  );
}

export default LineItem;