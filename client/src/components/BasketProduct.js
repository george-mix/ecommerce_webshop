import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementedBasket, incrementedBasket } from '../store/reducers/basketSlice';
import productAPI from '../http/productAPI';

const BasketProduct = ({ product }) => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState();

    const basketId = useSelector(state => state.persistedReducer.basket.ids[0]);
    let productId = product.productId;
    let qnt = product.quantity;
    useEffect(() => {
        const fetchData = async () => {
            const data = await productAPI.fetchOneProduct(productId);
            setProductData(data)
        };
        fetchData()
    }, [productId]);


    const handleIncrement = async () => {
        let test = {
            basketId,
            productId
        };
        await dispatch(incrementedBasket(test));
    };

    const handleDecrement = async () => {
        let test = {
            basketId,
            productId
        };
        await dispatch(decrementedBasket(test));
    }

    return (
        <div>
            <h3>{productData?.name}</h3>
            <button onClick={handleDecrement}>-</button>
            <h4>{qnt}</h4>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default BasketProduct;