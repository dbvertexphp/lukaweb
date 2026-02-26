// import React from 'react';
// import Home from './pages/home';
// import Cart from '.page/ addcart'; 


// function App() {
//   return (
//     <>
//       <Home />
//       <Cart />


//     </>
//   )
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Import
import Home from './pages/home';
import Cart from './pages/addcart'; 
import Checkout from './pages/checkout';
import OrderHistory from './pages/orderhistery';
import ProductListing from './pages/Productlist';

import Product from './pages/products'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Product Detail Page (Dynamic Route) */}
        <Route path="/product/:id" element={<Product />} />
        
        {/* Other Pages */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/shop" element={<ProductListing />} />
      </Routes>
    </Router>
  );
}

export default App;