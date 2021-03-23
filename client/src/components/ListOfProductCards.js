import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, fetchProducts } from '../store/reducers/productsSlice';
import ProductCard from './ProductCard';

const ListOfProductCards = () => {
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const param = { brandId: null, categoryId: null, limit: null, page: null };

    useEffect(() => {
        dispatch(fetchProducts(param));
        // eslint-disable-next-line 
    }, [dispatch]);

    const list = products.map(product => {
        return (
            <ProductCard key={product.id} oneProduct={product.id} />
        )
    })

    return (
        <div>
            <h2>Products</h2>
            {list}
        </div>
    )
};

export default ListOfProductCards;