import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementedBasket, incrementedBasket } from '../store/reducers/basketSlice';
import productAPI from '../http/productAPI';
import { selectBrandById } from '../store/reducers/brandsSlice';
import { selectCategoryById } from '../store/reducers/categoriesSlice';

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

    const category = useSelector(state => selectCategoryById(state, productData?.categoryId));
    const brand = useSelector(state => selectBrandById(state, productData?.brandId));

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
        <div className="basketitem">
            <div className="basketitem__grid">
                <img
                    alt={productData?.name}
                    src={`${process.env.REACT_APP_API_URL}/${productData?.img}`}
                />
                <div className="basketitem__grid__info">
                    <h3>{brand?.name} {productData?.name}</h3>
                    <h4>Category: {category?.name}</h4>
                </div>
                <div className="basketitem__grid__controls">
                    <div className="basketitem__grid__controls__buttons">
                        <button onClick={handleDecrement}>-</button>
                        <h4>{qnt}</h4>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <div className="basketitem__grid__controls__price">
                        <h4>${qnt * productData?.price}</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BasketProduct;