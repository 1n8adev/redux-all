import React, { useEffect, useContext } from 'react';
import ProductComponent from './ProductComponent';
import { MyContext } from '../contextApi/context';
const ProductPage = () => {
  const { products, loading, error, fetchProducts } = useContext(MyContext);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="ui grid container">
      <ProductComponent products={products} />
    </div>
  );
};

export default ProductPage;
