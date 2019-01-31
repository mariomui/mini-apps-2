import React from 'react';

function LineItem(props) {
  const { category1, category2, date, description, granularity, lang } = props.data;
  return (
    <tr>
      <td>

        {date}
      </td>
      <td>

        {description}
      </td>
    </tr>

  );
}
// category1: "By place"
// category2: "Egypt"
// date: "-300"
// description: "Pyrrhus, the King of Epirus, is taken as a hostage to Egypt after the Battle of Ipsus and makes a diplomatic marriage with the princess Antigone, daughter of Ptolemy and Berenice."
// granularity: "year"
// lang: "en"
export default LineItem;