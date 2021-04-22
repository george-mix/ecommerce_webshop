import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import basketAPI from '../../http/basketAPI';

export const fetchedBasket = createAsyncThunk("basket/fetchOne", async (id) => {
    const response = await basketAPI.fetchBasket(id);
    return response;
});

const basketAdapter = createEntityAdapter();

export const initialState = basketAdapter.getInitialState({ loading: false });

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
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
        }
    }
});

export default basketSlice.reducer;

export const {
    selectById: selectBasketById
} = basketAdapter.getSelectors(state => state.persistedReducer.basket);