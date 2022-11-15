import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    };


    return (
        <div className='shopContainer'>
            <div className='productsContainer'>


                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >

                    </Product>)
                }

            </div>

            <div className='cartContainer'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Products;