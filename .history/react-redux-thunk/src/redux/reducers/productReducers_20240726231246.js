import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from '../constants/productTypes';
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
