import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import userAPI from '../../http/userAPI';

export const registerUser = createAsyncThunk("user/register", async (param, thunkAPI) => {
    try {
        const response = await userAPI.registration(param);
        let data = response;
        return data;
    } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
    }
});

export const loginUser = createAsyncThunk("user/login", async (param, thunkAPI) => {
    try {
        const response = await userAPI.login(param);
        let data = response;
        return data;
    } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
    }
});

const userAdapter = createEntityAdapter();

export const initialState = userAdapter.getInitialState({
    isFetching: false,
    isSuccess: false,
    isError: false,
    isAuth: false,
    errorMessage: '',
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            userAdapter.upsertOne(state, action.payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.isAuth = true;
            return state;
        },
        [loginUser.rejected]: (state, payload) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [registerUser.pending]: (state) => {
            state.isFetching = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            userAdapter.upsertOne(state, action.payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.isAuth = true;
            return state;
        },
        [registerUser.rejected]: (state, payload) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },

    }
});


export default userSlice.reducer;

export const userSelector = state => state.user;
