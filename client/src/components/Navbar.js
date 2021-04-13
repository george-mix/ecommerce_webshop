import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../helpers/consts';

const Navbar = () => {

    return (
        <header className="header">
            <div className="header__navbar">
                <div className="header__contain">
                    <Link to={LOGIN_ROUTE}>
                        <button>Sign In</button>
                    </Link>
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