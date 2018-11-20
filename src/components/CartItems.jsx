/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CartItem from './CartItem';

const CartItems = (props) => {
    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {
                    props.cartItemsList.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
            <span id="cartTotal">Total: ${props.cartTotal / 100}</span>
        </div>
    )
}

export default CartItems