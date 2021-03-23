import React from 'react';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import ListOfProductCards from '../components/ListOfProductCards';

const Shop = () => {
    return (
        <div>
            Shop
            <Brands />
            <Categories />
            <ListOfProductCards />
        </div>
    )
}

export default Shop;
