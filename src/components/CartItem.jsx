/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const CartItem = (props) => {
    return (
        <div className="collection-item">
            <div className="row">
                <div className="col-md-8">{props.item.product.name}</div>
                <div className="col-md-2">{props.item.product.priceInCents}</div>
                <div className="col-md-2">{props.item.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem