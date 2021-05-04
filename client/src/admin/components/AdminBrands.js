import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, selectAllBrands } from '../../store/reducers/brandsSlice';
import Brand from './Brand';
import AddNewBrand from './modals/AddNewBrand';

const AdminBrands = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const brands = useSelector(selectAllBrands);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch]);

    const brandList = brands.map(brand => {
        return (
            <Brand key={brand.id} brand={brand} />
        )
    });

    return (
        <section className="admin__section">
            <div className="admin__section__title">
                <h3>Brands</h3>
                <div
                    className="admin__section__title__button">
                    <button onClick={() => setBrandVisible(true)}>New Brand</button>
                </div>
            </div>
            {brandList}
            <AddNewBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
        </section>
    )
};

export default AdminBrands;