import React, { useContext } from 'react';
import { MyContext } from '../contextApi/context';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(MyContext);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price}</span>
            </div>
            <button
              className="cart-item-remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button className="clear-cart-button" onClick={() => clearCart()}>
          Clear Cart
        </button>
      )}
      {cart.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
};

export default Cart;
