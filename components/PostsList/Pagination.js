import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';

const Pagination = ({ totalPages, currentPage }) => {
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);

  return (
  <div className="space-y-2 pt-6 pb-8 md:space-y-5">
    <nav className="flex justify-between">
      {!prevPage && (
        <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
          Previous
        </button>
      )}
      {prevPage && (
        <Link 
          className="text-primary-500 link-text"
          href={currentPage - 1 === 1 ? `/page/` : `/page/${currentPage - 1}`}
        >
          <button rel="previous">Previous</button>
        </Link>
      )}
      <span>
        {currentPage} of {totalPages}
      </span>
      {!nextPage && (
        <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
          Next
        </button>
      )}
      {nextPage && (
        <Link 
          className="text-primary-500 link-text"
          href={`/page/${currentPage + 1}`}
        >
          <button rel="next">Next</button>
        </Link>
      )}
    </nav>
  </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Pagination;
