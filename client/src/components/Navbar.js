import React from 'react';

const Navbar = () => {
    return (
        <header className="header">
            <div className="header__navbar">
                <div className="header__contain">
                    <button>Sign In</button>
                    <h3 className="header__navbar__logo">Kickshow</h3>
                    <i className="fas fa-suitcase"></i>
                </div>
            </div>
        </header>
    )
};

export default Navbar;