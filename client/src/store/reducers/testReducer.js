import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: false
    },
    reducers: {
        signIn: state => {
            state.value = true
        }
    }
});

export default testSlice.reducer;