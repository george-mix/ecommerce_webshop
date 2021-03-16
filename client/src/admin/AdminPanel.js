import React from 'react';
import Brands from './components/Brands';
import Categories from './components/Categories';

const AdminPanel = () => {

    return (
        <div>
            <h2>Admin Panel</h2>
            <Brands />
            <Categories />
        </div>
    )
};

export default AdminPanel;