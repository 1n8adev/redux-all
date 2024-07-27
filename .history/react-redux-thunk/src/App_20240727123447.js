import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import './App.css';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';
import Cart from './components/Cart';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
