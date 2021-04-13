import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/reducers/userSlice';
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../helpers/consts';

const Navbar = () => {
    const dispatch = useDispatch()

    const { isAuth } = useSelector(state => state.persistedReducer.user);

    const onLogout = () => {
        localStorage.removeItem('token');
        dispatch(logoutUser())
    };

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
                        <i className="fas fa-suitcase"></i>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Navbar;