import React, { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
