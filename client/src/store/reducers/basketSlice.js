import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import basketAPI from '../../http/basketAPI';

export const fetchedBasket = createAsyncThunk("basket/fetchOne", async (id) => {
    const response = await basketAPI.fetchBasket(id);
    return response;
});

export const incrementedBasket = createAsyncThunk("basket/increment", async ({ basketId, productId }) => {
    const response = await basketAPI.incrementBasketProduct(basketId, productId);
    return response
});

export const decrementedBasket = createAsyncThunk("basket/decrement", async ({ basketId, productId }) => {
    const response = await basketAPI.decrementBasketProduct(basketId, productId);
    return response
});

export const postedOrder = createAsyncThunk("basket/postOrder", async (id) => {
    const response = await basketAPI.postOrder(id);
    return response
});

const basketAdapter = createEntityAdapter();

export const initialState = basketAdapter.getInitialState({ loading: false });

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        logoutBasket(state, action) {
            basketAdapter.removeAll(state)
        },
    },
    extraReducers: {
        [fetchedBasket.pending]: (state) => {
            state.loading = true
        },
        [fetchedBasket.fulfilled]: (state, action) => {
            state.loading = false;
            basketAdapter.upsertOne(state, action.payload);
        },
        [fetchedBasket.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [incrementedBasket.pending]: (state) => {
            state.loading = true
        },
        [incrementedBasket.fulfilled]: (state, action) => {
            state.loading = false;
            basketAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            });
        },
        [incrementedBasket.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [decrementedBasket.pending]: (state) => {
            state.loading = true
        },
        [decrementedBasket.fulfilled]: (state, action) => {
            state.loading = false;
            basketAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            });
        },
        [decrementedBasket.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [postedOrder.pending]: (state) => {
            state.loading = true
        },
        [postedOrder.fulfilled]: (state, action) => {
            state.loading = false;
            basketAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            });
        },
        [postedOrder.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

export const {
    logoutBasket
} = basketSlice.actions;

export default basketSlice.reducer;

export const {
    selectById: selectBasketById
} = basketAdapter.getSelectors(state => state.persistedReducer.basket);