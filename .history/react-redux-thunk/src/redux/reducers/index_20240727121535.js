import { combineReducers } from 'redux';
import { productsReducer, productDetailsReducer } from './productReducers';
import cartReducer from './cartReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
