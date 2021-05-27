import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, selectAllBrands } from '../store/reducers/brandsSlice';

const Brands = ({ brand, setBrandFilter }) => {
    const dispatch = useDispatch();
    const brands = useSelector(selectAllBrands);

    useEffect(() => {
        dispatch(fetchBrands())
    }, [dispatch]);

    return (
        <div className="modal__main__selector">
            <label>Brands</label>
            <select
                defaultValue={brand}
                onChange={e => setBrandFilter(e.target.value)}>
                <option value="all">All</option>
                {brands.map(brand => {
                    return <option key={brand.id} value={brand.id}>
                        {brand.name}
                    </option>
                })}
            </select>
        </div>
    )
};

export default Brands;