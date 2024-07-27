import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from '../constants/productTypes';

//fetch products

export const fetchProducts = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchProductsFail = (error) => ({
  type: FETCH_PRODUCT_FAIL,
  payload: error,
});

// Fetch Product Details

export const fetchProductDetails = (productId) => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
  payload: productId,
});

export const fetchProductDetailsSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});
export const fetchProductDetailsFail = (error) => ({
  type: FETCH_PRODUCT_DETAILS_FAIL,
  payload: error,
});
