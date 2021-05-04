import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../store/reducers/categoriesSlice';
import UpdateCategory from './modals/UpdateCategory';

const Brand = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <div key={category.id} className="admin__list">
            <h4 >{category.name}</h4>
            <button className="green" onClick={() => setIsModalOpen(true)}>Update</button>
            <button onClick={() => dispatch(deleteCategory(category.id))}>
                <i className="fas fa-times red"></i>
            </button>
            <UpdateCategory id={category.id} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Brand;