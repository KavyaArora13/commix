import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Assets/Css/ProductDetail/ProductDetail.scss'
import ProductImageGallery from '../Components/ProductDetail/ProductImageGallery.jsx'
import ProductDetailInfo from '../Components/ProductDetail/ProductDetailInfo'

const ProductDetail = () => {
  const productImages = [
    `${process.env.PUBLIC_URL}/images/iconic1.png`,
    `${process.env.PUBLIC_URL}/images/iconic2.png`,
    `${process.env.PUBLIC_URL}/images/iconic1.png`,
    `${process.env.PUBLIC_URL}/images/iconic2.png`,
  ];

  return (
    <div className="product-detail-page">
      <Header />
      <div className="container">
        <div className="row">
          {/* Left Section - Product Image Gallery */}
          <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <ProductImageGallery images={productImages} />
          </div>

          {/* Right Section (We will create this part later) */}
          <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12">
            <ProductDetailInfo/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
