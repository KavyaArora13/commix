import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner'; 
import SearchBar from '../Components/SearchBar';
import ProductGridLayout from '../Components/ProductGridLayout';

const ProductPage = () => {
    return (
      <div className="product-page">
        <Header />

        <div className="container">
          <Banner />
          <SearchBar/> 
          <ProductGridLayout/>
        </div>

        <Footer />
      </div>
    );
}

export default ProductPage;
