// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductListing} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
