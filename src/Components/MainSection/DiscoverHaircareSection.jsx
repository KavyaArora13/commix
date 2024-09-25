// DiscoverHaircareSection.jsx
import React from 'react';

const DiscoverHaircareSection = () => {
  const products = [
    { name: 'Custom Shampoo', image: 'product1.png' },
    { name: 'Custom Conditioner', image: 'product2.png' },
    { name: 'Custom Cream', image: 'product3.png' },
    { name: 'Custom Facewash', image: 'product4.png' },
  ];

  return (
    <section className="discover-haircare-section">
      <div className="heading-container">
        <img src={require('../../Assets/Image/bloomLeft.png')} alt="Flower Icon" className="decor-icon left-icon" />
        <h2 className="section-heading">
          <span className="decor-line">DISCOVER HAIRCARE FOR ALL</span>
        </h2>
        <img src={require('../../Assets/Image/bloomRight.png')} alt="Flower Icon" className="decor-icon right-icon"/>
      </div>

      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={require(`../../Assets/Image/${product.image}`)}
              alt={product.name}
            />
            <h4>HAIRCARE</h4>
            <h3>{product.name}</h3>
            <p>$23.00</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverHaircareSection;
