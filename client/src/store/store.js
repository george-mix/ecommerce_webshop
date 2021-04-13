import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import products from './reducers/productsSlice';
import brands from './reducers/brandsSlice';
import categories from './reducers/categoriesSlice';
import admin from './reducers/adminSlice';
import user from './reducers/userSlice';
import basket from './reducers/basketSlice';

const reducers = combineReducers({
    products,
    brands,
    categories,
    admin,
    user,
    basket
});

const persistConfig = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: {
        persistedReducer
    }
});

export default store;