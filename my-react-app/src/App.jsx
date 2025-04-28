import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Support from './pages/Support';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ShopMens from './pages/ShopMens';
import ShopWomens from './pages/ShopWomens';
import ShopKids from './pages/ShopKids';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/categories' element={<Category />} />
          <Route path='/support' element={<Support />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shop/mens' element={<ShopMens />}/>
          <Route path='/shop/womens' element={<ShopWomens />}/>
          <Route path='/shop/kids' element={<ShopKids />}/>
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
