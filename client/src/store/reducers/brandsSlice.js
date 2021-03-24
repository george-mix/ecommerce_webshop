import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import brandAPI from '../../http/brandAPI';

export const fetchBrands = createAsyncThunk("brands/fetchAll", async () => {
    const response = await brandAPI.fetchBrands();
    return response;
});

export const deleteBrand = createAsyncThunk("brands/deleteOne", async (id) => {
    const response = await brandAPI.deleteBrand(id);
    return response;
})

export const brandsAdapter = createEntityAdapter();

const initialState = brandsAdapter.getInitialState({ loading: false });

export const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBrands.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchBrands.fulfilled]: (state, action) => {
            brandsAdapter.upsertMany(state, action.payload);
            state.loading = false;
        },
        [fetchBrands.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [deleteBrand.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteBrand.fulfilled]: (state, action) => {
            brandsAdapter.removeOne(state, action.payload);
            state.loading = false;
        },
        [deleteBrand.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
});

export default brandSlice.reducer;

export const {
    selectAll: selectAllBrands
} = brandsAdapter.getSelectors(state => state.brands);
