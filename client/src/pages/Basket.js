import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userSelector } from '../store/reducers/userSlice';
import { LOGIN_ROUTE } from '../helpers/consts';
import basketAPI from '../http/basketAPI';
import { fetchedBasket } from '../store/reducers/basketSlice';

const Basket = () => {
    const userId = useSelector(state => state.user.ids[0]);

    const dispatch = useDispatch();

    useEffect(() => {
        let id = userId
        dispatch(fetchedBasket(id));
    }, [dispatch, userId])


    return (
        <div>
            Basket
        </div>
    )
};

export default Basket;
