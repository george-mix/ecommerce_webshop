// import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchOneProduct } from '../../http/productAPI';

// const initialState = {
//     posts: [],
//     status: 'idle',
//     error: null
// }

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (id) => {
//     const response = await fetchOneProduct(id);
//     return response.posts;
// })

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         reactionAdded(state, action) {
//             const { postId, reaction } = action.payload;
//             const existingPost = state.posts.find(post => post.id === postId);
//             if (existingPost) {
//                 existingPost.reactions[reaction]++
//             }
//         },
//         postAdded: {
//             reducer(state, action) {
//                 state.posts.push(action.payload)
//             },
//             prepare(title, content, userId) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         date: new Date().toISOString(),
//                         title,
//                         content,
//                         user: userId,
//                         reactions: { thumbsUp: 0, heart: 0 }
//                     }
//                 }
//             }
//         },
//         postUpdated(state, action) {
//             const { id, title, content } = action.payload;
//             const existingPost = state.posts.find(post => post.id === id);
//             if (existingPost) {
//                 existingPost.title = title;
//                 existingPost.content = content;
//             }
//         }
//     },
//     extraReducers: {
//         [fetchPosts.pending]: (state, action) => {
//             state.status = 'loading';
//         },
//         [fetchPosts.fulfilled]: (state, action) => {
//             state.status = 'succeeded';
//             state.posts = state.posts.concat(action.payload);
//         },
//         [fetchPosts.error]: (state, action) => {
//             state.status = 'failed';
//             state.error = action.error.message;
//         }
//     }
// });

// export const { reactionAdded, postAdded, postUpdated } = postsSlice.actions;

// export default postsSlice.reducer;

// export const selectAllPost = (state) => state.posts.posts;

// export const selectPostById = (state, postId) =>
//     state.posts.posts.find(post => post.id === postId);