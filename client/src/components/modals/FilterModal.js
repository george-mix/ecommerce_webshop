import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import Brands from '../Brands';
import Categories from '../Categories';
import CardsPerPage from '../CardsPerPage';
import { productsLimited } from '../../store/reducers/productsSlice';

const FilterModal = ({ open, onClose }) => {
    const dispatch = useDispatch();

    const [productsPerPage, setProductsPerPage] = useState(10);

    const handleClick = () => {
        dispatch(productsLimited(productsPerPage));
    };

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onClose} />
            <div className="filtermodal">
                <i onClick={onClose} className="fas fa-times"></i>
                <h3>Filters</h3>
                <CardsPerPage setProductsPerPage={setProductsPerPage} />
                <Brands />
                <Categories />
                <button onClick={handleClick}>Filter</button>
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default FilterModal;
