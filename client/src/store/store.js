import { configureStore } from '@reduxjs/toolkit';

import products from './reducers/productsSlice.js';

export default configureStore({
    reducer: {
        products
    }
});