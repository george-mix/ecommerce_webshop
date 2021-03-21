import React from 'react';
import { useHistory } from 'react-router';
import Brands from './components/Brands';
import Categories from './components/Categories';
import Products from './components/ListOfAllProducts';

const AdminPanel = () => {
    const history = useHistory();

    const onLogOut = () => {
        localStorage.removeItem('token');

        history.push('/admin');
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={onLogOut}>Logout</button>
            <Brands />
            <Categories />
            <Products />
        </div>
    )
};

export default AdminPanel;