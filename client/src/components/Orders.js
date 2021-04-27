import React from 'react';
import OrderItem from './OrderItem';

const OrderList = ({ basket }) => {
    const orders = basket?.orders;

    const list = orders.map(order => {
        return <OrderItem key={order.id} order={order} />
    })

    return (
        <div>
            Orders
            {list}
        </div>
    )
}

export default OrderList;
