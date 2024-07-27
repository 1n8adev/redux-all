// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Redux Shop - Using Saga</h1>
      <p>
        This is a simple e-commerce application built with React and Redux with
        thunk middleware . Below are the instructions for the Redux setup we
        have implemented:
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
        </li>
        <li>
          <strong>Create Reducers:</strong> Create reducers to handle the cart
          and product actions.
        </li>
        <li>
          <strong>Combine Reducers:</strong> Combine the reducer with other
          reducers in your root reducer.
        </li>
        <li>
          <strong>Configure the Store:</strong> Configure the Redux store to use
          the reducers and middleware.
        </li>
        <li>
          <strong>Provide the Store:</strong> Wrap your application with the
          Redux <code>Provider</code> to make the store available throughout
          your app.
        </li>
      </ol>
      <p>
        Follow these steps to set up Redux in your application and manage global
        state efficiently.
      </p>

      <p style={{ color: 'red' }}>
        Note: For managing the cart process, I have used Redux to demonstrate
        synchronization actions. If you are developing a real website, using
        localStorage for storing cart data might be a better option for
        persistence.
      </p>
    </div>
  );
};

export default Home;
