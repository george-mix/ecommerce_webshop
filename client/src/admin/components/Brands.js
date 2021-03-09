import React, { useState, useEffect } from 'react';
import { fetchBrands } from '../../http/productAPI';

const Brands = () => {
    const [brandList, setBrandList] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const data = await fetchBrands();
                setBrandList(data)
            } catch (err) {

            }
        }
        fetchAPI();
    }, [])

    const list = brandList.map(brand => {
        return (
            <h3 key={brand.id}>{brand.name}</h3>
        )
    })

    return (
        <section>
            {list}
        </section>
    )
};

export default Brands;