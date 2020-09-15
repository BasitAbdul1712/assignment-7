import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart
    //const total = cart.reduce((total, red)=> total + red.balance, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.balance;
        
    }
    return (
        <div className="cart" >
            <h3>Order summery</h3>
            <h4>Total Item: {cart.length}</h4>
            <h4>Total: $ {total}</h4>
            <p className="Checkout">Checkout</p>
            <p className="input"><input id="index" type="text" placeholder="Enter Coupon" />Apply</p>
   
        </div>
    );
};

export default Cart;