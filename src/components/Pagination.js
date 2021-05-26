import React from 'react';
import './Pagination.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { nextpage, prevpage } from '../actions/paginationAction';

function Pagination() {
  const { activeTemplates, loading } = useSelector((state) => state.template);
  const { currentPage, postsPerPage } = useSelector(
    (state) => state.pagination
  );
  let pages = Math.ceil(activeTemplates.length / postsPerPage);
  const dispatch = useDispatch();

  function goToNextPage() {
    dispatch(nextpage());
  }

  function goToPreviousPage() {
    dispatch(prevpage());
  }

  return (
    <div>
      {loading ? (
        ''
      ) : (
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev-btn ${currentPage === 1 ? 'disabled' : ''}`}
          >
            {currentPage === 1 ? '' : <ArrowBackIosIcon className="page-btn" />}
            Previous
          </button>
          <div className="pages">
            <button>{currentPage}</button>
            <p>of</p>
            <button className="total_pages">{pages}</button>
          </div>
          <button
            onClick={goToNextPage}
            className={`prev_btn ${currentPage === pages ? 'disabled' : ''}`}
          >
            Next
            {currentPage === pages ? (
              ''
            ) : (
              <ArrowForwardIosIcon className="page-btn" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
export default Pagination;
