import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import BasketProduct from '../components/BasketProduct';
import { LOGIN_ROUTE } from '../helpers/consts';
import { fetchedBasket, selectBasketById } from '../store/reducers/basketSlice';

const Basket = () => {
    const userId = useSelector(state => state.persistedReducer.user.ids[0]);

    const dispatch = useDispatch();

    const basketProducts = useSelector((state) => selectBasketById(state, userId));

    let productList = basketProducts?.productlist;

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

    return (
        <div>
            Basket
            {list}
        </div>
    )
};

export default Basket;
