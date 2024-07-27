import { combineReducers } from 'redux';
import { productsReducer, productDetailsReducer } from './productReducers';
import { productsReducer, productDetailsReducer } from './cartReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
