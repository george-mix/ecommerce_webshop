import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ADMIN_SINGLE_PRODUCT_ROUTE } from '../../helpers/consts';
import { selectBrandById } from '../../store/reducers/brandsSlice';

const Product = ({ product }) => {
    const brand = useSelector(state => selectBrandById(state, product.brandId));

    return (
        <div className="admin__list">
            <div >
                <h4>{brand?.name} {product?.name}</h4>
            </div>
            <div>
                <Link to={`${ADMIN_SINGLE_PRODUCT_ROUTE}/${product.id}`}><button className="green" >Update</button></Link>
            </div>
            <div>
                <img
                    alt={product?.name}
                    src={`${process.env.REACT_APP_API_URL}/${product?.img}`}
                />
            </div>
        </div>
    )
}

export default Product;
