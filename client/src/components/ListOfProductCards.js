import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, fetchProducts } from '../store/reducers/productsSlice';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const ListOfProductCards = () => {
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const pageLimit = useSelector(state => state.persistedReducer.products.limit);
    const filterByBrand = useSelector(state => state.persistedReducer.brands.selected);
    const filterByCategory = useSelector(state => state.persistedReducer.categories.selected);
    const [pageNumber, setPageNumber] = useState(1);


    useEffect(() => {
        const param = {
            brandId: filterByBrand,
            categoryId: filterByCategory,
            limit: pageLimit,
            page: pageNumber
        };
        dispatch(fetchProducts(param));
    }, [dispatch, pageNumber, pageLimit, filterByBrand, filterByCategory]);


    const list = products.map(product => {
        return (
            <ProductCard key={product.id} oneProduct={product.id} />
        )
    });

    return (
        <div className="container stopper">
            <div className="wrapper">
                {list}
            </div>
            <Pagination pageLimit={pageLimit} setPageNumber={setPageNumber} />
        </div>
    )
};

export default ListOfProductCards;

