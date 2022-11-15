import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // load data(products) from products.json
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // load data (cart info) form
    // local storage and
    // load total product info
    // using that cart info

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                console.log(addedProducts);
                savedCart.push(addedProducts);

            }
        }
        setCart(savedCart);
    }, [products])


    const handleAddToCart = selectedProduct => {
        // const newCart = [...cart, selectedProduct];
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity++;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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