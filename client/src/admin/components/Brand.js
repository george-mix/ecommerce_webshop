import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBrand } from '../../store/reducers/brandsSlice';
import UpdateBrand from './modals/UpdateBrand'

const Brand = ({ brand }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const onDelete = async (id) => {
        dispatch(deleteBrand(id))
    };
    return (
        <div key={brand.id}>
            <h4 >{brand.name}</h4>
            <button onClick={() => onDelete(brand.id)}>x</button>
            <button onClick={() => setIsModalOpen(true)}>Update</button>
            <UpdateBrand id={brand.id} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Brand;