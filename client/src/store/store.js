import { configureStore } from '@reduxjs/toolkit';

import products from './reducers/productsSlice';
import brands from './reducers/brandsSlice';
import categories from './reducers/categoriesSlice';
import admin from './reducers/adminSlice';

export default configureStore({
    reducer: {
        products,
        brands,
        categories,
        admin
    }
});