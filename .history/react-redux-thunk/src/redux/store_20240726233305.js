// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
