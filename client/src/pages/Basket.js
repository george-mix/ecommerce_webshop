import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import BasketProduct from '../components/BasketProduct';
import OrderList from '../components/Orders';
import { LOGIN_ROUTE } from '../helpers/consts';
import { fetchedBasket, postedOrder, selectBasketById } from '../store/reducers/basketSlice';

const Basket = () => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.persistedReducer.user.ids[0]);
    const basketId = useSelector(state => state.persistedReducer.basket.ids[0]);

    const basket = useSelector((state) => selectBasketById(state, userId));

    let productList = basket?.productlist;

    useEffect(() => {
        let id = userId
        dispatch(fetchedBasket(id));
    }, [dispatch, userId]);

    if (!userId || !productList) return <Redirect to={LOGIN_ROUTE} />

    let list = productList.map(product => {
        return (
            <BasketProduct key={product.id} product={product} />
        )
    });

    const handleOrder = () => {
        dispatch(postedOrder(basketId))
    };

    return (
        <div>
            Basket
            {list}
            <OrderList basket={basket} />
            <button onClick={handleOrder}>Order</button>
        </div>
    )
};

export default Basket;
