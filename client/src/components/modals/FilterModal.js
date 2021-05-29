import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Brands from '../Brands';
import Categories from '../Categories';
import CardsPerPage from '../CardsPerPage';
import { productsLimited } from '../../store/reducers/productsSlice';
import { selectedBrand } from '../../store/reducers/brandsSlice';
import { selectedCategory } from '../../store/reducers/categoriesSlice';

const FilterModal = ({ open, onClose }) => {
    const dispatch = useDispatch();

    const pageLimit = useSelector(state => state.persistedReducer.products.limit);

    const [productsPerPage, setProductsPerPage] = useState(10);
    const [brandFilter, setBrandFilter] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState(null);

    const handleClick = () => {
        dispatch(productsLimited(productsPerPage));
        dispatch(selectedBrand(brandFilter));
        dispatch(selectedCategory(categoryFilter));
         onClose();
    };

    useEffect(() => {
        setProductsPerPage(pageLimit);
    },[pageLimit])

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onClose} />
            <div className="modal">

                <div className="modal__title">
                    <h3>Filters</h3>
                </div>
                <div className="modal__main">
                    <CardsPerPage products={productsPerPage} setProductsPerPage={setProductsPerPage} />
                    <Brands brand={brandFilter} setBrandFilter={setBrandFilter} />
                    <Categories category={categoryFilter} setCategoryFilter={setCategoryFilter} />
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
