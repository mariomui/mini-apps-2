import React from 'react';
import ReactPaginate from 'react-paginate';
import LineItem from './LineItem.jsx';

const Header = () => (
  // refactor this using Object.keys to spit out dynamic headers.
  <tr>
    <th>hi</th>
    <th>hi</th>
  </tr>
);

function DataViewer(props) {
  const { page, datas } = props;

  // category1: "By place"
  // category2: "Egypt"
  // date: "-300"
  // description: "Pyrrhus, the King of Epirus, is
  // taken as a hostage to Egypt after the Battle of Ipsus and
  // granularity: "year"
  // lang: "en"
  const util = datas.map((data, k) => (
    <LineItem key={k} data={data} />
  ));
  return (
    <th>

      {datas.length > 0 ? <Header /> : null}
      {util}
      placeholder
    </th>
  );
}
export default DataViewer;