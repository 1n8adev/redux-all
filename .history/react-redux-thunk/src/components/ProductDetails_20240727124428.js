// src/components/ProductDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/actions/productActions';
import {
  addToCart,
  removeFromCart,
  clearCart,
} from '../redux/actions/cartActions';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const cartState = useSelector((state) => state.cart);
  const { image, title, price, category, description } =
    productDetails.product || {};

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  if (productDetails.loading) {
    return (
      <div className="ui grid container">
        <div>Loading...</div>
      </div>
    );
  }

  if (productDetails.error) {
    return (
      <div className="ui grid container">
        <div>Error: {productDetails.error}</div>
      </div>
    );
  }

  return (
    <div className="ui grid container product-details-container">
      <div className="cart-container">
        <h2 className="cart-header">Cart</h2>
        <ul className="cart-list">
          {cartState.cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price}</span>
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
                onClick={() => dispatch(addToCart(productDetails.product))}
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
