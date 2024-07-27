// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Redux Shop</h2>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="cart-icon">
          <Link to="/cart">
            <i className="shopping cart icon"></i>
          </Link>
          {cartState.cartItems.length > 0 && (
            <div className="cart-count">{cartState.cartItems.length}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
