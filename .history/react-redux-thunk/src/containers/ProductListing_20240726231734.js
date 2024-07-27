import React, { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

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
