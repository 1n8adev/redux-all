import {
  FETCH_CART_ADD_REQUEST,
  FETCH_CART_ADD_SUCCESS,
  FETCH_CART_ADD_FAIL,
} from '../constants/productTypes';

export const addToCart = (product) => {
  return {
    type: FETCH_CART_ADD_REQUEST,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
