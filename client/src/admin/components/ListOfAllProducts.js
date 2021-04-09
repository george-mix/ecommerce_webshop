import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../store/reducers/productsSlice';
import AddNewProduct from './modals/AddNewProduct';
import { ADMIN_SINGLE_PRODUCT_ROUTE } from '../../helpers/consts';
import Pagination from '../../components/Pagination';

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


    return (
        <section>
            <h2>Products</h2>
            <button onClick={() => setModalIsOpen(true)}>Add New Product</button>
            <AddNewProduct show={modalIsOpen} onHide={() => setModalIsOpen(false)} />
            {products.map(product => {
                return (
                    <h4 key={product.id}><Link to={`${ADMIN_SINGLE_PRODUCT_ROUTE}/${product.id}`}>{product.name}</Link></h4>
                )
            })}
            <Pagination pageLimit={pageLimit} setPageNumber={setPageNumber} />
        </section>
    )
};

export default ListOfAllProducts;
