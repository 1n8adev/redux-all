// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Cart</h2>
      <ul className="cart-list">
        {cartState.cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price}</span>
            </div>
            <button
              className="cart-item-remove-button"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cartState.cartItems.length > 0 && (
        <button
          className="clear-cart-button"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      )}
      {cartState.cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
};

export default Cart;
