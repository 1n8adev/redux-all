import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const cartState = useSelector((state) => state.cart);
  const { image, title, price, category, description } = productDetails.product;

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  if (productDetails.loading)
    return (
      <div className="ui grid container">
        <div>Loading...</div>
      </div>
    );
  if (productDetails.error)
    return (
      <div className="ui grid container">
        <div>Error: {productDetails.error}</div>
      </div>
    );

  const addToCart = () => {};

  return (
    <div className="ui grid container">
      <h2>Cart</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

      <div className="ui placeholder segment">
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
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div
                  className="visible content"
                  onClick={() => dispatch(addToCart(productDetails.product))}
                >
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
