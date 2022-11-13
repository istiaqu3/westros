import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <h3>Westros</h3>

            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;