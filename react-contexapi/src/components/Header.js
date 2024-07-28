// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contextApi/context';
const Header = () => {
  const { cart } = useContext(MyContext);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>ContextAPI Shop </h2>
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
          {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
