import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../helpers/consts';
import { selectProductById } from '../store/reducers/productsSlice';

const ProductCard = ({ oneProduct }) => {
    const id = oneProduct;
    const card = useSelector((state) => selectProductById(state, id));

    return (
        <div>
            <h4>{card.name}</h4>
            <Link to={`${PRODUCT_ROUTE}/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    )
};

export default ProductCard;