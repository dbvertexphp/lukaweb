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
import ProfilePage from './pages/ProfilePage';
import LoginModal from './components/LoginModal';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/About/AboutUs';

function App() {
  return (
    <Router>
       <ScrollToTop /> 
        <LoginModal /> 
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;