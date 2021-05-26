import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../helpers/consts';
import { selectBrandById } from '../store/reducers/brandsSlice';
import { selectCategoryById } from '../store/reducers/categoriesSlice';
import { selectProductById } from '../store/reducers/productsSlice';

const ProductCard = ({ oneProduct }) => {
    const id = oneProduct;
    const card = useSelector((state) => selectProductById(state, id));

    const category = useSelector(state => selectCategoryById(state, card?.categoryId));
    const brand = useSelector(state => selectBrandById(state, card?.brandId));

    return (
        <div className="card">
            <img alt={card?.name} src={`${process.env.REACT_APP_API_URL}/${card?.img}`} />
            <div className="card__body">
                <h4 className="card__body__title">{brand?.name} {card?.name}</h4>
                <p className="card__body__category">{category?.name}</p>
                <h5 className="card__body__price">{card?.price}</h5>
                <Link to={`${PRODUCT_ROUTE}/${id}`}>
                    <button className="card__body__btn">Details</button>
                </Link>
            </div>
        </div>
    )
};

export default ProductCard;