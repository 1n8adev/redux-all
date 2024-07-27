import axios from 'axios';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from '../constants/productTypes';

//fetch products

export const fetchProducts = async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });
  try {
    const response = await axios.get('/api/products');
  } catch (error) {}
};
