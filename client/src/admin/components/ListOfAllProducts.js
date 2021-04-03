import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../store/reducers/productsSlice';
import AddNewProduct from './modals/AddNewProduct';

const ListOfAllProducts = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const param = { brandId: null, categoryId: null, limit: null, page: null };

    useEffect(() => {
        dispatch(fetchProducts(param));
        // eslint-disable-next-line 
    }, [dispatch]);


    return (
        <section>
            <h2>Products</h2>
            <button onClick={() => setModalIsOpen(true)}>Add New Product</button>
            <AddNewProduct show={modalIsOpen} onHide={() => setModalIsOpen(false)} />
            {products.map(product => {
                return (
                    <h4 key={product.id}>{product.name}</h4>
                )
            })}
        </section>
    )
};

export default ListOfAllProducts;
