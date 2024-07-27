import { combineReducers } from 'redux';
import { productsReducer, productDetailsReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
