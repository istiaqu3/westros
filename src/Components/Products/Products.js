import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='shopContainer'>
            <div className='productsContainer'>
                {/* <h2>Products card will be shown here. {products.length}</h2>
                 */}

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}>

                    </Product>)
                }

            </div>

            <div className='cartContainer'>
                <h2>Order Summary</h2>
            </div>

        </div>
    );
};

export default Products;