import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="product"></img>
            <div className='productInfo'>
                <p className='productName'>
                    {name}
                </p>
                <p>${price}</p>
                <p><small>{seller}</small></p>
                <p><small>{ratings} star</small></p>

            </div>

            <button className='addToCartBtn'><p>Add to Cart</p></button>


        </div>
    );
};

export default Product;