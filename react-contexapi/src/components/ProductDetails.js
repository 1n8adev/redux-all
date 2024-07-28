// src/components/ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../contextApi/context';

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, addToCart, cart, removeFromCart, clearCart } =
    useContext(MyContext);
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <div>Product not found!</div>;
  const { image, title, price, category, description } = product || {};

  return (
    <div className="ui grid container product-details-container">
      <div className="cart-container">
        <h2 className="cart-header">Cart</h2>
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price}</span>
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
      <div className="ui placeholder segment product-details-segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column lp">
              <img alt={title} className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div
                className="ui vertical animated button"
                tabIndex="0"
                onClick={() => addToCart(product)}
              >
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
