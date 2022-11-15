import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }

    // 10% tax
    let tax = total * .1;
    tax = parseFloat(tax.toFixed(2));

    let grandTotal = total + shipping + tax;



    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;