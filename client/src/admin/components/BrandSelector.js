import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllBrands } from '../../store/reducers/brandsSlice';

const BrandSelector = ({ setBrand, brand }) => {
    const brands = useSelector(selectAllBrands);

    return (
        <div>
            <label>Select Brand</label>
            <select
                value={brand}
                onChange={e => setBrand(e.target.value)}
                required>
                <option value={""}>...</option>
                {brands.map(brand => {
                    return <option key={brand.id} value={brand.id}>
                        {brand.name}
                    </option>
                })}
            </select>
        </div>
    )
}

export default BrandSelector;
