import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductById } from '../store/reducers/productsSlice';

const BasketProduct = ({ product }) => {
    let id = product.productId;
    let qnt = product.quantity;
    const item = useSelector((state) => selectProductById(state, id));

    return (
        <div>
            <h3>{item.name}</h3>
            <button>-</button>
            <h4>{qnt}</h4>
            <button>+</button>
        </div>
    )
}

export default BasketProduct;