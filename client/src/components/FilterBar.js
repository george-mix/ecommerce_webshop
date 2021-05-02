import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FilterModal from './modals/FilterModal';

const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const count = useSelector(state => state.persistedReducer.products.count);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="filterbar">
            <div className="filterbar__part">
                <h4>Products: <span>{count}</span></h4></div>
            <div onClick={handleClick} className="filterbar__part">
                <i className="fas fa-filter"></i>
                <h4>Filter</h4>
            </div>
            <FilterModal open={isOpen} onClose={() => setIsOpen(false)} />

        </div>
    )
};

export default FilterBar;