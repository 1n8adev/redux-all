import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProductsApi = () => {
  return axios.get(`${API_BASE_URL}/products`);
};

export const fetchProductDetailsApi = (productId) => {
  return axios.get(`${API_BASE_URL}/products/${productId}`);
};
