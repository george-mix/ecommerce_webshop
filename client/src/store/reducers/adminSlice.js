import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import adminAPI from "../../http/adminAPI";

export const loginAdmin = createAsyncThunk("admin/login", async (param, thunkAPI) => {
    try {
        const response = await adminAPI.login(param);
        let data = response;
        return data;

    } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
    }
});

const adminAdapter = createEntityAdapter();

export const initialState = adminAdapter.getInitialState({
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
});

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        },
    },
    extraReducers: {
        [loginAdmin.pending]: (state) => {
            state.isFetching = true;
        },
        [loginAdmin.fulfilled]: (state, action) => {
            adminAdapter.upsertOne(state, action.payload);
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginAdmin.rejected]: (state, payload) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
    }
});

export default adminSlice.reducer;

export const adminSelector = state => state.admin;

export const { clearState } = adminSlice.actions;