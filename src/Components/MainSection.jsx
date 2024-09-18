import React from 'react';
import Slider from 'react-slick';
import SocialIcon from "./SocialIcon";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import '/Users/kavyaarora/Desktop/Task1/first/src/Assets/Css/MainSection.scss';
import { useState } from 'react';  // Assuming this is your main scss file path

const MainSection = () => {
  const settings = { 
    infinite: true, 
    speed: 700, 
    slidesToShow: 1, // How many slides to show at once
    slidesToScroll: 1, // How many slides to scroll at once
    autoplay: true, // Automatically move the slides
    autoplaySpeed: 2000, // 3 seconds delay for autoplay
    pauseOnHover: false,   // Prevent pausing when hovered
    pauseOnDotsHover: false,
    cssEase: 'ease-in-out',
  };

  const productSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // You want to display 3 slides
    slidesToScroll: 1,
    centerMode: true,  // This is important to ensure the center is correctly identified
    centerPadding: '0px',  // No extra padding around the center slide
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,  // Slide every 2 seconds
    pauseOnHover: false, 
    cssEase: 'ease', // Smooth easing function
  };

  // Dummy data for the products (you can replace this with your actual data)
  const products = [
    { name: 'Custom Conditioner', image: 'iconic1.png', price: '$23.00' },
    { name: 'Custom Shampoo', image: 'iconic2.png', price: '$23.00' },
    { name: 'Custom Cream', image: 'iconic3.png', price: '$23.00' }
  ];

  const slidesData = [
    {
      heading: "SO POPULAR IT SOLD OUT",
      text: "Neque porro quisquam est qui dolorem",
      buttonText: "Shop Now",
    },
    {
      heading: "NEW ARRIVAL",
      text: "Lorem ipsum dolor sit amet",
      buttonText: "View Collection",
    },
    {
      heading: "BEST SELLERS",
      text: "Consectetur adipiscing elit",
      buttonText: "Explore Best Sellers",
    },
  ];

  return (
    <section className="main-section">
      {/* Main Slider */}
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide-content">
            <div className="content-wrapper">
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
              <button className="shop-now-btn">
                <div className="btn-content">
                  {slide.buttonText}
                  <SocialIcon icon={faChevronRight} link="#" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* New Launched Section */}
      <section className="new-launched-section">
        <div className="heading-container">
          <img
            src={require('../Assets/Image/bloomLeft.png')}
            alt="Flower Icon"
            className="decor-icon left-icon"
          />
          <h2 className="section-heading">
            <span className="decor-line">NEW LAUNCHED</span>
          </h2>
          <img
            src={require('../Assets/Image/bloomRight.png')}
            alt="Flower Icon"
            className="decor-icon right-icon"
          />
        </div>

        <div className="image-container">
          <img
            src={require('../Assets/Image/add-image.png')} // Replace with your actual image path
            alt="New Launch"
            className="launch-image"
          />
          <div className="content-overlay">
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
        </div>
      </section>

      {/* DISCOVER HAIRCARE FOR ALL */}
      <section className="discover-haircare-section">
        <div className="heading-container">
          <img src={require('../Assets/Image/bloomLeft.png')} alt="Flower Icon" className="decor-icon left-icon" />
          <h2 className="section-heading">
            <span className="decor-line">DISCOVER HAIRCARE FOR ALL</span>
          </h2>
          <img src={require('../Assets/Image/bloomRight.png')} alt="Flower Icon" className="decor-icon right-icon"/>
        </div>

        <div className="products-container">
          <div className="product-card">
            <img
              src={require('../Assets/Image/product1.png')}
              alt="Custom Shampoo"
            />
            <h4>HAIRCARE</h4>
            <h3>Custom Shampoo</h3>
            <p>$23.00</p>
          </div>

          <div className="product-card">
            <img
              src={require('../Assets/Image/product2.png')}
              alt="Custom Conditioner"
            />
            <h4>HAIRCARE</h4>
            <h3>Custom Conditioner</h3>
            <p>$23.00</p>
          </div>

          <div className="product-card">
            <img
              src={require('../Assets/Image/product3.png')}
              alt="Custom Cream"
            />
            <h4>HAIRCARE</h4>
            <h3>Custom Cream</h3>
            <p>$23.00</p>
          </div>

          <div className="product-card">
            <img
              src={require('../Assets/Image/product4.png')}
              alt="Custom Facewash"
            />
            <h4>HAIRCARE</h4>
            <h3>Custom Facewash</h3>
            <p>$23.00</p>
          </div>
        </div>
      </section>

      {/* two-image-section */}
      <section className="two-image-section">
        <div className="two-images-container">
          <img
            src={require('../Assets/Image/leftImage.png')}
            alt="Left Image"
            className="left-image"
          />
          <img
            src={require('../Assets/Image/rightImage.png')}
            alt="Right Image"
            className="right-image"
          />
        </div>
      </section>

      {/* commix-iconics-section */}
      <section className="commix-iconics-section">
      <div className="heading-container">
      <img src={require('../Assets/Image/bloomLeft.png')} alt="Flower Icon" className="decor-icon left-icon" />
          <h2 className="section-heading">
            <span className="decor-line">COMMIX ICONICS PRODUCTS  </span>
          </h2>
          <img src={require('../Assets/Image/bloomRight.png')} alt="Flower Icon" className="decor-icon right-icon"/>
      </div>

      <Slider {...productSliderSettings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={require(`../Assets/Image/${product.image}`)} alt={product.name} />
            <h4>HAIRCARE</h4>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Slider>
    </section>

      {/* Full width Image Section */}
      <section className="full-width-image-section">
        <img
          src={require('../Assets/Image/bottle-image.png')}
          alt="Full width image"
          className="full-width-image"
        />
      </section>

      {/* Exclusive Festive Combos Section */}
      <section className="exclusive-festive-combos-section">
        <div className="heading-container">
          <img
            src={require('../Assets/Image/bloomLeft.png')}
            alt="Flower Icon"
            className="decor-icon left-icon"
          />
          <h2 className="section-heading">
            <span className="decor-line">EXCLUSIVE FESTIVE COMBOS</span>
          </h2>
          <img
            src={require('../Assets/Image/bloomRight.png')}
            alt="Flower Icon"
            className="decor-icon right-icon"
          />
        </div>

        <div className="combo-image-container">
          <img
            src={require('../Assets/Image/combo-image.png')}
            alt="Festive Combos"
            className="combo-image"
          />
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <div className="offer-image-container">
          <img
            src={require('../Assets/Image/offer-image.png')}
            alt="Offer Image"
            className="offer-image"
          />
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
      </section>

      {/* WHAT WE'RE LOVING RIGHT NOW */}
      <section className="featured-section">
        {/* Heading with Flowers */}
        <div className="heading-container">
          <img
            src={require('../Assets/Image/bloomLeft.png')}
            alt="Flower Icon"
            className="decor-icon left-icon"
          />
          <h2 className="section-heading">
            <span className="decor-line">WHAT WE'RE LOVING RIGHT NOW</span>
          </h2>
          <img
            src={require('../Assets/Image/bloomRight.png')}
            alt="Flower Icon"
            className="decor-icon right-icon"
          />
        </div>

        {/* Two Divs with Images and Text */}
        <div className="image-grid">
          <div className="product-card">
            <img
              src={require('../Assets/Image/subscribe-left.png')}
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
              src={require('../Assets/Image/subscribe-right.png')}
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

      <section className="blog-section">
  {/* Heading with Flowers */}
  <div className="heading-container">
    <img src={require('../Assets/Image/bloomLeft.png')} alt="Flower Icon" className="decor-icon left-icon" />
    <h2 className="section-heading">
      <span className="decor-line">BLOG</span>
    </h2>
    <img src={require('../Assets/Image/bloomRight.png')} alt="Flower Icon" className="decor-icon right-icon" />
  </div>

  <p className="section-description">
    Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry.
  </p>

  {/* Blog Post Grid */}
  <div className="blog-grid">
    <div className="blog-post">
      <img src={require('../Assets/Image/blog-image1.png')} alt="Blog 1" className="blog-image" />
      <div className="blog-text">
        <p>It is a long established fact <br/>that</p>
        <h3>The Best Celebrity Beauty Brands to Shop in 2024</h3>
      </div>
    </div>

    <div className="blog-post">
      <img src={require('../Assets/Image/blog-image2.png')} alt="Blog 2" className="blog-image" />
      <div className="blog-text">
        <p>It is a long established fact <br/>that</p>
        <h3>The Best Celebrity Beauty Brands to Shop in 2024</h3>
      </div>
    </div>

    <div className="blog-post">
      <img src={require('../Assets/Image/blog-image2.png')} alt="Blog 2" className="blog-image" />
      <div className="blog-text">
        <p>It is a long established fact <br/>that</p>
        <h3>The Best Celebrity Beauty Brands to Shop in 2024</h3>
      </div>
    </div>
  </div>

  {/* See All Button */}
  <div className="see-all-button-container">
    <button className="see-all-button">SEE ALL</button>
  </div>
</section>

    <section className='subscribe-section'>
        <div className='heading-container'>
            <img src={require('../Assets/Image/bloomLeft.png')} alt="Flower Icon" className='decor-icon left-icon'/>
            <h2 className='section-heading'>
                <span className='decor-line'>LET'S STAY IN TOUCH</span>
            </h2>
            <img src={require('../Assets/Image/bloomRight.png')} alt="Flower Icon" className='decor-icon right-icon'/>
        </div>

        <p className='section-description'>
        Get The Latest Beauty Tips Straight To Your Inbox. Can't Wait To Connect
        </p>

        <div className='subscribe-form'>
            <input type="email" placeholder='Enter Email' className='email-input'/>
            <button className='subscribe-button'>SUBSCRIBE</button>
        </div>
    </section>
    </section>
  );
};

export default MainSection;