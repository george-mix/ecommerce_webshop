import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGIN_ROUTE } from '../helpers/consts';
import { fetchedBasket } from '../store/reducers/basketSlice';

const Basket = () => {
    const userId = useSelector(state => state.persistedReducer.user.ids[0]);

    const dispatch = useDispatch();

    useEffect(() => {
        let id = userId
        dispatch(fetchedBasket(id));
    }, [dispatch, userId])


    if (!userId) return <Redirect to={LOGIN_ROUTE} />

    return (
        <div>
            Basket
        </div>
    )
};

export default Basket;
