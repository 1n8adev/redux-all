// store.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
