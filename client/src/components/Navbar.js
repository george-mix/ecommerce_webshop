import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/reducers/userSlice';
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../helpers/consts';
import { logoutBasket, selectBasketById } from '../store/reducers/basketSlice';

const Navbar = () => {
    const dispatch = useDispatch()

    const { isAuth } = useSelector(state => state.persistedReducer.user);

    const [basketProducts, setBasketProducts] = useState([]);
    const [count, setCount] = useState(0)

    const basketId = useSelector(state => state.persistedReducer.basket.ids[0]);
    const basket = useSelector(state => selectBasketById(state, basketId));

    useEffect(() => {
        setBasketProducts(basket?.productlist)
    }, [basket]);

    const onLogout = () => {
        localStorage.removeItem('token');
        dispatch(logoutUser());
        dispatch(logoutBasket());
    };


    useEffect(() => {
        if (basketProducts) {
            const num = basketProducts.reduce((acc, prod) => {
                return acc += prod.quantity
            }, 0);
            setCount(num)
        }
    }, [basketProducts]);

    return (
        <header className="header">
            <div className="header__navbar">
                <div className="header__contain">
                    {!isAuth ?
                        <Link to={LOGIN_ROUTE}>
                            <button>Sign In</button>
                        </Link> :
                        <button onClick={onLogout}>Log out</button>}
                    <Link to={SHOP_ROUTE}>
                        <h3 className="header__navbar__logo">Kickshow</h3>
                    </Link>
                    <Link to={BASKET_ROUTE}>
                        <i className="fas fa-suitcase">{isAuth ? count : null}</i>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Navbar;