import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Brands from '../components/Brands';
import AddNewBrand from './components/modals/AddNewBrand';
import Categories from '../components/Categories';
import Products from './components/ListOfAllProducts';


const AdminPanel = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const history = useHistory();

    const onLogOut = () => {
        localStorage.removeItem('token');

        history.push('/admin');
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={onLogOut}>Logout</button>
            <div>
                <Brands />
                <button>New Brand</button>
                <AddNewBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            </div>

            <Categories />
            <Products />
        </div>
    )
};

export default AdminPanel;