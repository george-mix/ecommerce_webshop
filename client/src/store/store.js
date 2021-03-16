import { configureStore } from '@reduxjs/toolkit';

import products from './reducers/productsSlice';
import brands from './reducers/brandsSlice';

export default configureStore({
    reducer: {
        products,
        brands
    }
});