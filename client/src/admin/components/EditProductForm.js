// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { postUpdated, selectPostById } from '../../store/reducers/productsSlice';
// import { ADMIN_SINGLE_PRODUCT_ROUTE } from '../../utils/consts';

// const EditPostForm = ({ match }) => {
//     const { postId } = match.params;

//     const post = useSelector(state => selectPostById(state, postId));

//     const [title, setTitle] = useState(post.title);
//     const [content, setContent] = useState(post.content);

//     const dispatch = useDispatch();
//     const history = useHistory();

//     const onTitleChanged = (e) => setTitle(e.target.value);
//     const onContentChanged = (e) => setContent(e.target.value);

//     const onSavePostClicked = () => {
//         if (title && content) {
//             dispatch(postUpdated({ id: postId, title, content }))
//             history.push(`${ADMIN_SINGLE_PRODUCT_ROUTE}/${postId}`)
//         }
//     }

//     return (
//         <section>
//             <h2>Edit Post</h2>
//             <form onSubmit={onSavePostClicked}>
//                 <label htmlFor="postTitle">Post Title:</label>
//                 <input
//                     type="text"
//                     name="postTitle"
//                     value={title}
//                     onChange={onTitleChanged}
//                 />
//                 <label htmlFor="postContent">Content:</label>
//                 <textarea
//                     name="postContent"
//                     value={content}
//                     onChange={onContentChanged}
//                 />
//                 <button type="submit" >
//                     Save Post
//                 </button>
//             </form>
//         </section>
//     )
// };

// export default EditPostForm;
