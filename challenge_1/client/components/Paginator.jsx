import React from 'react';
import ReactPaginate from 'react-paginate';

const tableCss = {
  border: '1px solid black',
  color: 'blue',
  margin: '1px'
}

function Paginator(props) {
  const { pageCount, handlePageClick, minShownPagers } = props;
  return (
    <tr>
      <td style={tableCss} id="react-paginate">
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          pageRangeDisplayed={window.innerWidth / pageCount}
          marginPagesDisplayed={minShownPagers}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          onPageChange={handlePageClick}
        />
      </td>
    </tr>
  )
}

export default Paginator;