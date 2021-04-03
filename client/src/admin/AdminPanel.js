import React from 'react';
import { useHistory } from 'react-router';
import AdminBrands from './components/AdminBrands';
import AdminCategories from './components/AdminCategories';
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
            <AdminBrands />
            <AdminCategories />
            <Products />
        </div>
    )
};

export default AdminPanel;