import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  ADD_TO_CART,
  FETCH_CART_DETAILS,
} from './actionTypes';

// Products Reducer
const initialProductsState = {
  loading: false,
  products: [],
  error: null,
};

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Product Details Reducer
const initialProductDetailsState = {
  loading: false,
  product: {},
  error: null,
};

export const productDetailsReducer = (
  state = initialProductDetailsState,
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case FETCH_PRODUCT_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
