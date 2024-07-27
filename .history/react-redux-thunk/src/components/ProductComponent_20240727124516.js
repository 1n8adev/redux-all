// src/components/ProductComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const productState = useSelector((state) => state.products || {}); // Adjusted to access the right part of state
  if (productState.loading) return <div>Loading...</div>;
  if (productState.error) return <div>Error: {productState.error}</div>;

  const renderList = productState.products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product-card" key={id}>
        <Link to={`/product/${id}`} className="product-link">
          <div className="product-image">
            <img src={image} alt={title} />
          </div>
          <div className="product-details">
            <h3 className="product-title">{title}</h3>
            <p className="product-price">${price}</p>
            <p className="product-category">{category}</p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="product-grid">{renderList}</div>;
};

export default ProductComponent;
