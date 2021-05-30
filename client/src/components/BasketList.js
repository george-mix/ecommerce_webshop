import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from '../helpers/consts';
import { postedOrder } from '../store/reducers/basketSlice';
import BasketProduct from './BasketProduct';

const BasketList = ({ basket, basketId, productList }) => {
    const dispatch = useDispatch();

    let list = productList.map(product => {
        return (
            <BasketProduct key={product.id} product={product} />
        )
    });

    const handleOrder = () => {
        dispatch(postedOrder(basketId))
    };

    return (
        <div className="basketlist">
            {basket?.totalPrice === 0 ?
                <div className="basketlist__empty">
                    <h2>Your Basket Is Empty</h2>
                    <h4>Go back to shopping</h4>
                    <div className="basketlist__empty__link button">
                        <button><Link to={SHOP_ROUTE}>Shop</Link></button>
                    </div>
                </div> :
                <div className="basketlist__full stopper">
                    <div className="basketlist__full__layout">
                        <div className="basketlist__full__layout__top">
                            {list}
                        </div>
                        <div className="basketlist__full__layout__bottom">
                            <h3>Total Price: <span>${basket?.totalPrice}</span></h3>
                            <div className="button">
                                <button onClick={handleOrder}>Order</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    )
}

export default BasketList;
