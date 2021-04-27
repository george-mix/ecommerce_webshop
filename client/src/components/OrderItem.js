import React from 'react';

const OrderItem = ({ order }) => {
    console.log(order.orderitems);
    return (
        <div>
            {order.id}
            <button>Order Details</button>
        </div>
    )
}

export default OrderItem;
