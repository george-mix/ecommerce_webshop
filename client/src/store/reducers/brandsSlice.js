import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import brandAPI from '../../http/brandAPI';

export const fetchBrands = createAsyncThunk("brands/fetchAll", async () => {
    const response = await brandAPI.fetchBrands();
    return response;
});

export const deleteBrand = createAsyncThunk("brands/deleteOne", async (id) => {
    await brandAPI.deleteBrand(id);
    return id;
});

export const addedBrand = createAsyncThunk("brands/addOne", async (name) => {
    const response = await brandAPI.createBrand(name);
    return response;
});

export const updatedBrand = createAsyncThunk("brands/updateBrand", async ({ id, name }) => {
    let param = {
        name: name
    }
    await brandAPI.updateBrand(id, param);
    return { id, name };
});

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
            brandsAdapter.removeOne(state, action.payload)
            state.loading = false;
        },
        [deleteBrand.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [addedBrand.pending]: (state) => {
            state.loading = true;
        },
        [addedBrand.fulfilled]: (state, action) => {
            brandsAdapter.upsertOne(state, action.payload);
            state.loading = false;
        },
        [addedBrand.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [updatedBrand.pending]: (state) => {
            state.loading = true
        },
        [updatedBrand.fulfilled]: (state, action) => {
            brandsAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            });
            state.loading = false;
        },
        [updatedBrand.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
});

export default brandSlice.reducer;

export const {
    selectAll: selectAllBrands
} = brandsAdapter.getSelectors(state => state.brands);
