import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, seller, price, ratings, img } = product;
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="product"></img>
            <div className='productInfo'>
                <p className='productName'>
                    {name}
                </p>
                <p>${price}</p>
                <p><small>{seller}</small></p>
                <p><small>{ratings} <FontAwesomeIcon icon={faStar} /></small></p>

            </div>

            <button onClick={() => { handleAddToCart(product) }} className='addToCartBtn'>
                <p>Add to Cart   <FontAwesomeIcon icon={faShoppingCart} />

                </p></button>


        </div>
    );
};

export default Product;