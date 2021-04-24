import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductById } from '../store/reducers/productsSlice';
import { incrementedBasket } from '../store/reducers/basketSlice';
import { LOGIN_ROUTE } from '../helpers/consts';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    const product = useSelector(state => selectProductById(state, id));
    const basketId = useSelector(state => state.persistedReducer.basket.ids[0]);

    const handleAdd = async () => {
        if (!basketId) { return history.push(LOGIN_ROUTE) };
        let test = {
            basketId: basketId,
            productId: id
        }
        await dispatch(incrementedBasket(test))
    }

    return (
        <div>
            ProductDetails
            <h3>{product.name}</h3>
            <button onClick={handleAdd}>Add to Basket</button>
        </div>
    )
}

export default ProductDetails;
