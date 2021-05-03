import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import Brands from '../Brands';
import Categories from '../Categories';
import CardsPerPage from '../CardsPerPage';
import { productsLimited } from '../../store/reducers/productsSlice';
import { selectedBrand } from '../../store/reducers/brandsSlice';
import { selectedCategory } from '../../store/reducers/categoriesSlice';

const FilterModal = ({ open, onClose }) => {
    const dispatch = useDispatch();

    const [productsPerPage, setProductsPerPage] = useState(10);
    const [brandFilter, setBrandFilter] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState(null);

    const handleClick = () => {
        dispatch(productsLimited(productsPerPage));
        dispatch(selectedBrand(brandFilter));
        dispatch(selectedCategory(categoryFilter));
    };

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onClose} />
            <div className="modal">

                <div className="modal__title">
                    <h3>Filters</h3>
                </div>
                <div className="modal__main">
                    <CardsPerPage setProductsPerPage={setProductsPerPage} />
                    <Brands setBrandFilter={setBrandFilter} />
                    <Categories setCategoryFilter={setCategoryFilter} />
                </div>
                <div className="modal__buttons ">
                    <button><i onClick={onClose} className="fas fa-times">Close</i></button>
                    <button onClick={handleClick}>Filter</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default FilterModal;
