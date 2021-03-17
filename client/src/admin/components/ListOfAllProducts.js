import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../store/reducers/productsSlice';

const ListOfAllProducts = () => {
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const param = { brandId: null, categoryId: null, limit: null, page: null };

    useEffect(() => {
        dispatch(fetchProducts(param));
    }, [dispatch]);


    return (
        <section>
            <h2>Products</h2>
            {products.map(product => {
                return (
                    <h4 key={product.id}>{product.name}</h4>
                )
            })}
        </section>
    )
};

export default ListOfAllProducts;
