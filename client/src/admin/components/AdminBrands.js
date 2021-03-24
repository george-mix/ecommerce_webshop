import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand, fetchBrands, selectAllBrands } from '../../store/reducers/brandsSlice';
import AddNewBrand from './modals/AddNewBrand';
import UpdateBrand from './modals/UpdateBrand';

const AdminBrands = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const brands = useSelector(selectAllBrands);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch]);

    const onDelete = async (id) => {
        dispatch(deleteBrand(id))
    };

    const brandList = brands.map(brand => {
        return (
            <div key={brand.id}>
                <h4 >{brand.name}</h4>
                <button onClick={() => onDelete(brand.id)}>x</button>
                <button>Update</button>
                <UpdateBrand id={brand.id} />
            </div>
        )
    });

    return (
        <section>
            <h2>Brands</h2>
            {brandList}
            <button>New Brand</button>
            <AddNewBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
        </section>
    )
};

export default AdminBrands;