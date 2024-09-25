import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login';
import Offer from './Pages/Offer';
import SingleBlogPage from './Pages/SingleBlogPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product-detail" element={<ProductDetail/>}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/singleBlogPage" element={<SingleBlogPage/>} />
          </Routes>
    </Router>
  );
}

export default App;
