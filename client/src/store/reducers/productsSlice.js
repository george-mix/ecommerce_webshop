import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../http/productAPI';

export const fetchAllProducts = createAsyncThunk('test2/fetchPosts', async (brandId, categoryId, limit, page) => {
    const response = await fetchProducts(brandId, categoryId, limit, page);
    return response;
});

const postSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
    },
    reducers: {

    },
    extraReducers: {
        [fetchAllProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = [...state.products, action.payload];
        },
        [fetchAllProducts.rejected]: (state, action) => {
            state.loading = false;
        },
    }
});

export default postSlice.reducer;