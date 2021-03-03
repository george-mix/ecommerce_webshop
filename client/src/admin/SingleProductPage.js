import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADMIN_EDIT_POST_ROUTE } from '../utils/consts';

const SinglePostPage = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )
    if (!post) {
        return (
            <section>
                <h1>Post not found!</h1>
            </section>
        )
    }
    return (
        <section>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`${ADMIN_EDIT_POST_ROUTE}/${post.id}`}>Edit</Link>
        </section>
    )
};

export default SinglePostPage;