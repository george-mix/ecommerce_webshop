import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, selectAllBrands } from '../store/reducers/brandsSlice';

const Brands = () => {
    const brands = useSelector(selectAllBrands);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch])



    return (
        <section>
            <h2>Brands</h2>
            {brands.map(brand => {
                return (
                    <div key={brand.id}>
                        <input type="checkbox" />
                        <h4 >{brand.name}</h4>
                    </div>
                )
            })}
        </section>
    )
};

export default Brands;