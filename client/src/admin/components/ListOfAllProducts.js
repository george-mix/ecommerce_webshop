import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../store/reducers/productsSlice.js';

const ListOfAllProducts = () => {
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading)
            dispatch(fetchAllProducts());
    }, [])

    console.log(products);




    return (
        <section>
            <h2>Posts</h2>
        </section>
    )
};

export default ListOfAllProducts;
