import React, { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
  const [products, setProducts] = React.useState([]);
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err);
      });
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
