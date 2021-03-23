import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductById } from '../store/reducers/productsSlice';

const ProductCard = ({ oneProduct }) => {
    const id = oneProduct;
    const card = useSelector((state) => selectProductById(state, id));

    return (
        <div>
            <h4>{card.name}</h4>
        </div>
    )
};

export default ProductCard;