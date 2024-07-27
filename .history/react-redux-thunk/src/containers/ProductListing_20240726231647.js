import React, { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './actions';

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
      <ProductComponent productList={products} />
    </div>
  );
};

export default ProductPage;
