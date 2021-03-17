import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import categoryAPI from '../../http/categoryAPI';

export const fetchCategories = createAsyncThunk("categories/fetchAll", async () => {
    const response = await categoryAPI.fetchCategories();
    return response;
});

export const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState({ loading: false });

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            state.loading = true
        },
        [fetchCategories.fulfilled]: (state, action) => {
            categoriesAdapter.upsertMany(state, action.payload);
            state.loading = false;
        },
        [fetchCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error
        }
    }
});

export default categoriesSlice.reducer;

export const {
    selectAll: selectAllCategories
} = categoriesAdapter.getSelectors(state => state.categories);