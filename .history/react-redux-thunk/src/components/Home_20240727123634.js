// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Redux Shop</h1>
      <p>
        This is a simple e-commerce application built with React and Redux.
        Below are the instructions for the Redux setup we have implemented:
      </p>
      <h2>Redux Setup Instructions</h2>
      <ol>
        <li>
          <strong>Install Dependencies:</strong> Make sure you have installed
          the necessary packages:
          <pre>
            <code>
              npm install redux redux-thunk redux-devtools-extension react-redux
              axios
            </code>
          </pre>
        </li>
        <li>
          <strong>Define Action Types:</strong> Create a file{' '}
          <code>actionTypes.js</code> to define action types for the cart and
          product actions.
        </li>
        <li>
          <strong>Create Actions:</strong> Create action creators for adding,
          removing, and clearing items in the cart, as well as for fetching
          products.
          <pre>
            <code>{`
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actionTypes';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
          `}</code>
          </pre>
        </li>
        <li>
          <strong>Create Reducers:</strong> Create reducers to handle the cart
          and product actions.
          <pre>
            <code>{`
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actionTypes';

const initialCartState = {
  cartItems: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
          `}</code>
          </pre>
        </li>
        <li>
          <strong>Combine Reducers:</strong> Combine the cart reducer with other
          reducers in your root reducer.
          <pre>
            <code>{`
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers can go here
});

export default rootReducer;
          `}</code>
          </pre>
        </li>
        <li>
          <strong>Configure the Store:</strong> Configure the Redux store to use
          the reducers and middleware.
          <pre>
            <code>{`
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
          `}</code>
          </pre>
        </li>
        <li>
          <strong>Provide the Store:</strong> Wrap your application with the
          Redux <code>Provider</code> to make the store available throughout
          your app.
          <pre>
            <code>{`
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
          `}</code>
          </pre>
        </li>
      </ol>
      <p>
        Follow these steps to set up Redux in your application and manage global
        state efficiently.
      </p>
    </div>
  );
};

export default Home;
