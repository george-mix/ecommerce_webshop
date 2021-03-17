import React from 'react';
import Brands from './components/Brands';
import Categories from './components/Categories';
import Products from './components/ListOfAllProducts';

const AdminPanel = () => {

    return (
        <div>
            <h2>Admin Panel</h2>
            <Brands />
            <Categories />
            <Products />
        </div>
    )
};

export default AdminPanel;