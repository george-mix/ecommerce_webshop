import React, { useState } from 'react';
import FilterModal from './modals/FilterModal';
import Brands from './Brands';
import Categories from './Categories';

const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="filterbar">
            <div>Brands: <span>All</span></div>
            <div>Categories: <span>All</span></div>
            <div onClick={handleClick} className="filterbar__right">
                <i className="fas fa-filter"></i>
                <h5>Filter</h5>
            </div>
            <FilterModal open={isOpen} onClose={() => setIsOpen(false)}>
                <Brands />
                <Categories />
            </FilterModal>
        </div>
    )
};

export default FilterBar;