import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../store/reducers/categoriesSlice';
import UpdateCategory from './modals/UpdateCategory';

const Brand = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <div key={category.id}>
            <h4 >{category.name}</h4>
            <button onClick={() => dispatch(deleteCategory(category.id))}>x</button>
            <button onClick={() => setIsModalOpen(true)}>Update</button>
            <UpdateCategory id={category.id} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Brand;