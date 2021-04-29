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
            <div className="header__grid">
                <div className="header__grid__item__logo">
                    <Link className="navbar" to={SHOP_ROUTE}>
                        <h3 className="header__navbar__logo">Kickshow</h3>
                    </Link>
                </div>
                <div className="header__grid__item">
                    <Link className="navbar" to={BASKET_ROUTE}>
                        <i className="fas fa-suitcase">{isAuth ? count : null}</i>
                    </Link>
                </div>
                {!isAuth ?
                    <div className="header__grid__item">
                        <Link className="navbar" to={LOGIN_ROUTE}
                        >
                            <button>Sign In</button>
                        </Link>
                    </div> :
                    <div className="header__grid__item navbar">
                        <button onClick={onLogout}>Log out</button>
                    </div>}
            </div>
        </header>
    )
};

export default Navbar;