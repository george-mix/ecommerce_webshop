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

export const updatedProduct = createAsyncThunk("product/updateOne", async ({ ...test }) => {
    await productAPI.updateProduct(test);
    let test2 = {};
    for (let [key, value] of test.formData) {
        test2[key] = value;
    }
    let id = test.id;
    return { id, test2 }
})

export const deletedProduct = createAsyncThunk("product/deleteOne", async (id) => {
    await productAPI.deleteProduct(id);
    return id
});

const productsAdapter = createEntityAdapter();

export const initialState = productsAdapter.getInitialState({ limit: 10, count: 0, loading: false });

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsLimited(state, action) {
            state.limit = action.payload;
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.count = action.payload.count;
            productsAdapter.removeAll(state);
            productsAdapter.upsertMany(state, action.payload.rows);
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
            productsAdapter.removeOne(state, action.payload);
            state.loading = false;
        },
        [deletedProduct.error]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [updatedProduct.pending]: (state) => {
            state.loading = true
        },
        [updatedProduct.fulfilled]: (state, action) => {
            productsAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            });
            state.loading = false;
        },
        [updatedProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
});

export const {
    productsLimited
} = productsSlice.actions;

export default productsSlice.reducer;

export const {
    selectAll: selectAllProducts,
    selectById: selectProductById
} = productsAdapter.getSelectors(state => state.persistedReducer.products);