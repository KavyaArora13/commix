// CommixIconicsSection.jsx
import React from 'react';
import Slider from 'react-slick';

const CommixIconicsSection = () => {
  const productSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: 'ease',
  };

  const products = [
    { name: 'Custom Conditioner', image: 'iconic1.png', price: '$23.00' },
    { name: 'Custom Shampoo', image: 'iconic2.png', price: '$23.00' },
    { name: 'Custom Cream', image: 'iconic3.png', price: '$23.00' }
  ];

  return (
    <section className="commix-iconics-section">
      <div className="heading-container">
        <img src={require('../../Assets/Image/bloomLeft.png')} alt="Flower Icon" className="decor-icon left-icon" />
        <h2 className="section-heading">
          <span className="decor-line">COMMIX ICONICS PRODUCTS</span>
        </h2>
        <img src={require('../../Assets/Image/bloomRight.png')} alt="Flower Icon" className="decor-icon right-icon"/>
      </div>

      <Slider {...productSliderSettings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={require(`../../Assets/Image/${product.image}`)} alt={product.name} />
            <h4>HAIRCARE</h4>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CommixIconicsSection;