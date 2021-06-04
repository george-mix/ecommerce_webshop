import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import BasketList from '../components/BasketList';
import OrderList from '../components/Orders';
import { LOGIN_ROUTE } from '../helpers/consts';
import { fetchedBasket, selectBasketById } from '../store/reducers/basketSlice';

const Basket = () => {
    const dispatch = useDispatch();
    const [orders, setOrders] = useState(false);

    const userId = useSelector(state => state.persistedReducer.user.ids[0]);
    const basketId = useSelector(state => state.persistedReducer.basket.ids[0]);

    const basket = useSelector((state) => selectBasketById(state, userId));

    let productList = basket?.productlist;

    useEffect(() => {
        let id = userId
        dispatch(fetchedBasket(id));
    }, [dispatch, userId]);

    if (!userId || !productList) return <Redirect to={LOGIN_ROUTE} />

    return (
        <>
            <Helmet title="Basket"/>
            <div className="basket container">
                <div className="basket__header">
                    <button
                        className={!orders ? "active" : null}
                        onClick={() => setOrders(false)}>Basket</button>
                    <h2>/</h2>
                    <button
                        className={orders ? "active" : null}
                        onClick={() => setOrders(true)}>Orders</button>
                </div>
                {!orders ? <BasketList basket={basket} basketId={basketId} productList={productList} /> :
                    <OrderList basket={basket} />}
            </div>
        </>
    )
};

export default Basket;
