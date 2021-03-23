import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import productAPI from '../../http/productAPI';

export const fetchProducts = createAsyncThunk("products/fetchAll", async (param) => {
    const { brandId, categoryId, limit, page } = param;
    const response = productAPI.fetchProducts(brandId, categoryId, limit, page);
    return response;
});

const productsAdapter = createEntityAdapter();

export const initialState = productsAdapter.getInitialState({ loading: false });

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            productsAdapter.upsertMany(state, action.payload);
            state.loading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

export default productsSlice.reducer;

export const {
    selectAll: selectAllProducts,
    selectById: selectProductById
} = productsAdapter.getSelectors(state => state.products);