import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { postAdded } from '../../store/reducers/postsSlice';

const AddNewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSaveTitleClick = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )

            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>Add new Post</h2>
            <form onSubmit={onSaveTitleClick}>
                <input
                    type="text"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <textarea
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <button type="submit">Add</button>
            </form>
        </section>
    )
};

export default AddNewPost;
