// FeaturedSection.jsx
import React from 'react';

const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <div className="heading-container">
        <img
          src={require('../../Assets/Image/bloomLeft.png')}
          alt="Flower Icon"
          className="decor-icon left-icon"
        />
        <h2 className="section-heading">
          <span className="decor-line">WHAT WE'RE LOVING RIGHT NOW</span>
        </h2>
        <img
          src={require('../../Assets/Image/bloomRight.png')}
          alt="Flower Icon"
          className="decor-icon right-icon"
        />
      </div>

      <div className="image-grid">
        <div className="product-card">
          <img
            src={require('../../Assets/Image/subscribe-left.png')}
            alt="Product 1"
            className="product-image"
          />
          <div className="product-text">
            <h3>SUBSCRIBE & <br/>SAVE 15%</h3>
            <p>Rinse And Repeat with Comix</p>
            <button className="shop-now-btn">SHOP THE SET $44 - $59</button>
          </div>
        </div>

        <div className="product-card">
          <img
            src={require('../../Assets/Image/subscribe-right.png')}
            alt="Product 2"
            className="product-image"
          />
          <div className="product-text">
            <h3>SUBSCRIBE & <br/>SAVE 15%</h3>
            <p>Rinse And Repeat with Comix</p>
            <button className="shop-now-btn">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;