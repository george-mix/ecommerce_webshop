import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import productAPI from '../../http/productAPI';

export const fetchProducts = createAsyncThunk("products/fetchAll", async (param) => {
    const { brandId, categoryId, limit, page } = param;
    const response = productAPI.fetchProducts(brandId, categoryId, limit, page);
    return response;
});

export const addedProduct = createAsyncThunk("product/addOne", async (product) => {
    const response = await productAPI.createProduct(product);
    return response;
});

export const deletedProduct = createAsyncThunk("product/deleteOne", async (id) => {
    await productAPI.deleteProduct(id);
    return id
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
        },
        [addedProduct.pending]: (state) => {
            state.loading = true;
        },
        [addedProduct.fulfilled]: (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.loading = false;
        },
        [addedProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [deletedProduct.pending]: (state) => {
            state.loading = true;
        },
        [deletedProduct.fulfilled]: (state, action) => {
            productAPI.removeOne(state, action.payload);
            state.loading = false;
        },
        [deletedProduct.error]: (state, action) => {
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