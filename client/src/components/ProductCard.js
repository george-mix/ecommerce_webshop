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
            <img alt={card.name} width={150} height={150} src={`${process.env.REACT_APP_API_URL}/${card.img}`} />
            <h4>{card.name}</h4>
            <h5>{card.price}</h5>
            <Link to={`${PRODUCT_ROUTE}/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    )
};

export default ProductCard;