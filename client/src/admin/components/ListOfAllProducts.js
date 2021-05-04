import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../store/reducers/productsSlice';
import AddNewProduct from './modals/AddNewProduct';
import Pagination from '../../components/Pagination';
import Product from './Product';

const ListOfAllProducts = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const pageLimit = 10;
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const param = { brandId: null, categoryId: null, limit: pageLimit, page: pageNumber };
        dispatch(fetchProducts(param));

    }, [dispatch, pageNumber, pageLimit]);

    const list = products.map(product => {
        return (
            <Product key={product.id} product={product} />
        )
    })


    return (
        <section>
            <div className="admin__section__title">
                <h3>Products</h3>
                <div className="admin__section__title__button">
                    <button onClick={() => setModalIsOpen(true)}>Add New Product</button>
                </div>
            </div>
            <AddNewProduct show={modalIsOpen} onHide={() => setModalIsOpen(false)} />
            {list}
            <Pagination pageLimit={pageLimit} setPageNumber={setPageNumber} />
        </section>
    )
};

export default ListOfAllProducts;
