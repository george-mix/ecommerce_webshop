import { configureStore } from '@reduxjs/toolkit';

import test from './reducers/testReducer';
import postsReducer from './reducers/postsSlice';

export default configureStore({
    reducer: {
        test: test,
        posts: postsReducer
    }
})