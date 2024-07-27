import { combineReducers } from 'redux';
import { productsReducer, productDetailsReducer } from './productReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
