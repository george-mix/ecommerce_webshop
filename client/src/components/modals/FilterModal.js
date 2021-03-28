import React from 'react';
import ReactDom from 'react-dom';

const FilterModal = ({ open, children, onClose }) => {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onClose} />
            <div className="filtermodal">
                <i onClick={onClose} className="fas fa-times"></i>
                <h3>Filters</h3>
                {children}
                <button>Filter</button>
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default FilterModal;
