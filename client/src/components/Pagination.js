import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageLimit, setPageNumber }) => {
    const allProducts = useSelector(state => state.persistedReducer.products.count);
    const pageCount = Math.ceil(allProducts / pageLimit);

    const handlePageClick = ({ selected: selectedPage }) => {
        setPageNumber(selectedPage + 1);
    };


    return (
        <div>
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
    )
}

export default Pagination;
