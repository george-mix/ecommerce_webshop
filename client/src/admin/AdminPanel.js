import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADMIN_SINGLE_PRODUCT_ROUTE } from '../utils/consts';
import AddNewPost from './components/AddNewPost';

const AdminPanel = () => {
    const posts = useSelector(state => state.posts);

    const renderPosts = posts.map(post => {
        return (
            <article key={post.id}>
                <h4>{post.title}</h4>
                <h4>{post.content}</h4>
                <Link to={`${ADMIN_SINGLE_PRODUCT_ROUTE}/${post.id}`}>View</Link>
            </article>)
    })

    return (
        <div>
            <AddNewPost />
            <h1>Posts</h1>
            {renderPosts}
        </div>
    )
};

export default AdminPanel;