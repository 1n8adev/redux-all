import {
  FETCH_CART_ADD_REQUEST,
  FETCH_CART_ADD_SUCCESS,
  FETCH_CART_ADD_FAIL,
} from '../constants/productTypes';

export const addProductToCart = (product) => async (dispatch) => {
  dispatch({ type: FETCH_CART_ADD_REQUEST });
  try {
    dispatch({ type: FETCH_CART_ADD_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: FETCH_CART_ADD_FAIL, payload: product });
  }
};
