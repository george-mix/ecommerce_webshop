import React from 'react';
import ListOfProductCards from '../components/ListOfProductCards';
import FilterBar from '../components/FilterBar';
import { Helmet } from 'react-helmet';

const Shop = () => {

    return (
        <div>
            <Helmet title="Kikshow"/>
            <FilterBar />
            <ListOfProductCards />
        </div>
    )
}

export default Shop;
