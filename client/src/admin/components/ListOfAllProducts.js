import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../http/productAPI';

const ListOfAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const data = await fetchProducts(null, null, 1, 2);
                setProducts(data.rows);
            } catch (err) { }
        }
        fetchAPI()
    }, [])

    const list = products.map(product => {
        return <React.Fragment key={product.id}><h1>{product.name}</h1></React.Fragment>
    })

    return (
        <div>
            {list}
        </div>
    )
}

export default ListOfAllProducts;
