import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand, fetchBrands, selectAllBrands } from '../../store/reducers/brandsSlice';

const AdminBrands = () => {
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
            </div>
        )
    });

    return (
        <section>
            <h2>Brands</h2>
            {brandList}
        </section>
    )
};

export default AdminBrands;