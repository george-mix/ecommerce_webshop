import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, selectAllBrands } from '../../store/reducers/brandsSlice';

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
                    <h4 key={brand.id}>{brand.name}</h4>
                )
            })}
        </section>
    )
};

export default Brands;