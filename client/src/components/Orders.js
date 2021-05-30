import React from 'react';
import OrderItem from './OrderItem';

const OrderList = ({ basket }) => {
    const orders = basket?.orders;

    const list = orders.map(order => {
        return <OrderItem key={order.id} order={order} />
    })

    return (
        <div className="orders">
            <div className="orders__list stopper"> 
            <h2>My Orders</h2>
                {list}
            </div>
        </div>
    )
}

export default OrderList;
