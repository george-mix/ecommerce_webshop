import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementedBasket } from '../store/reducers/basketSlice';
import { LOGIN_ROUTE } from '../helpers/consts';
import { selectCategoryById } from '../store/reducers/categoriesSlice';
import { selectBrandById } from '../store/reducers/brandsSlice';
import productAPI from '../http/productAPI';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    const [product, setProduct] = useState();
    const basketId = useSelector(state => state.persistedReducer.basket.ids[0]);
    const category = useSelector(state => selectCategoryById(state, product?.categoryId));
    const brand = useSelector(state => selectBrandById(state, product?.brandId));

    useEffect(() => {
        const fetchData = async () => {
            const data = await productAPI.fetchOneProduct(id);
            setProduct(data)
        };
        fetchData()
    }, [id]);

    const handleAdd = async () => {
        if (!basketId) { return history.push(LOGIN_ROUTE) };
        let test = {
            basketId: basketId,
            productId: id
        }
        await dispatch(incrementedBasket(test))
    };

    let info = product?.info.map(i =>
        <div key={i.id} className="listitem">
            <h4 className="listitem__title">{i.name}</h4>
            <h4 className="listitem__description">{i.description}
            </h4>
        </div>)

    return (
        <div className="details container">
            <div className="stopper">
            <div className="details__title">
                <div className="details__title__name">
                    <h3>{brand?.name} {product?.name}</h3>
                    <h4>${product?.price}</h4>
                </div>
                <div className="details__title__info">
                    <h4>Brand: <span>{brand?.name}</span></h4>
                    <h4>Category: <span>{category?.name}</span></h4>
                </div>
            </div>
                <div className="details__image">
                    <img
                        alt={product?.name}
                        src={`${process.env.REACT_APP_API_URL}/${product?.img}`}
                    />
                </div>
            <div className="details button">
                <button
                    onClick={handleAdd}>Add to Basket</button>
            </div>
            <div className="details__description">
                <h2>Description</h2>
                <div className="details__description__list">
                    <div className="listitem">
                        <h4 className="listitem__title">Brand</h4>
                        <h4 className="listitem__description">{brand?.name}
                        </h4>
                    </div>
                    <div className="listitem">
                        <h4 className="listitem__title">Name</h4>
                        <h4 className="listitem__description">{product?.name}
                        </h4>
                    </div>
                    <div className="listitem">
                        <h4 className="listitem__title">Price</h4>
                        <h4 className="listitem__description">${product?.price}
                        </h4></div>
                    <div className="listitem">
                        <h4 className="listitem__title">Category</h4>
                        <h4 className="listitem__description">{category?.name}
                        </h4>
                    </div>

                    {info}
                </div>

            </div>
        </div>
        </div>
    )
}

export default ProductDetails;
