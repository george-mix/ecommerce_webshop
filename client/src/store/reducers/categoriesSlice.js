import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import categoryAPI from '../../http/categoryAPI';

export const fetchCategories = createAsyncThunk("categories/fetchAll", async () => {
    const response = await categoryAPI.fetchCategories();
    return response;
});

export const deleteCategory = createAsyncThunk("categories/deleteOne", async (id) => {
    await categoryAPI.deleteCategory(id);
    return id;
});

export const addedCategory = createAsyncThunk("categories/addOne", async (name) => {
    const response = await categoryAPI.createCategory(name);
    return response;
});

export const updatedCategory = createAsyncThunk("brands/updateCategory", async ({ id, name }) => {
    let param = {
        name: name
    }
    await categoryAPI.updateCategory(id, param);
    return { id, name };
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
        },
        [deleteCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCategory.fulfilled]: (state, action) => {
            categoriesAdapter.removeOne(state, action.payload)
            state.loading = false;
        },
        [deleteCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [addedCategory.pending]: (state) => {
            state.loading = true;
        },
        [addedCategory.fulfilled]: (state, action) => {
            categoriesAdapter.upsertOne(state, action.payload);
            state.loading = false;
        },
        [addedCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [updatedCategory.pending]: (state) => {
            state.loading = true
        },
        [updatedCategory.fulfilled]: (state, action) => {
            categoriesAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            });
            state.loading = false;
        },
        [updatedCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
});

export default categoriesSlice.reducer;

export const {
    selectAll: selectAllCategories
} = categoriesAdapter.getSelectors(state => state.categories);