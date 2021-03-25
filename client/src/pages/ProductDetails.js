import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductById } from '../store/reducers/productsSlice';

const ProductDetails = () => {
    const { id } = useParams();

    const product = useSelector(state => selectProductById(state, id))
    return (
        <div>
            ProductDetails
            <h3>{product.name}</h3>
        </div>
    )
}

export default ProductDetails;
