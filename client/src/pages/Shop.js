import React from 'react';
import ListOfProductCards from '../components/ListOfProductCards';
import FilterBar from '../components/FilterBar';

const Shop = () => {

    return (
        <div>
            <FilterBar />
            <ListOfProductCards />
        </div>
    )
}

export default Shop;
