import React from 'react';
import AddNewProduct from './components/AddNewProduct';
import Brands from './components/Brands';
import Categories from './components/Categories';
import ListOfAllProducts from './components/ListOfAllProducts';

const AdminPanel = () => {

    return (
        <div>
            <AddNewProduct />
            <Brands />
            <Categories />
            <ListOfAllProducts />
        </div>
    )
};

export default AdminPanel;