import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div className="basketitem order">
            <h3>№: {order.id}</h3>
            <h3>${order.totalPrice}</h3>
            <button>Details</button>
        </div>
    )
}

export default OrderItem;
