import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBrand } from '../../store/reducers/brandsSlice';
import UpdateBrand from './modals/UpdateBrand'

const Brand = ({ brand }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <div key={brand.id} className="admin__list">
            <h4 >{brand.name}</h4>
            <button className="green" onClick={() => setIsModalOpen(true)}>Update</button>
            <button onClick={() => dispatch(deleteBrand(brand.id))}>
                <i className="fas fa-times red"></i>
            </button>
            <UpdateBrand id={brand.id} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Brand;