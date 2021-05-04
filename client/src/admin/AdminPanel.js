import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logoutAdmin } from '../store/reducers/adminSlice';
import AdminBrands from './components/AdminBrands';
import AdminCategories from './components/AdminCategories';
import Products from './components/ListOfAllProducts';


const AdminPanel = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logoutAdmin());

        localStorage.removeItem('token');

        history.push('/admin');
    };

    return (
        <div className="admin container">
            <header className="admin__header">
                <h2>Admin Panel</h2>
                <div className="admin__header__button">
                    <button onClick={onLogOut}>Logout</button>
                </div>
            </header>
            <AdminBrands />
            <AdminCategories />
            <Products />
        </div>
    )
};

export default AdminPanel;