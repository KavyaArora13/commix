import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import '../../Assets/Css/ProductDetail/ProductDropdownInfo.scss';

const DropdownSection = ({ title, content, isOpen, toggleOpen, rating, reviewCount }) => {
  return (
    <div className="dropdown-section">
      <div className="dropdown-header" onClick={toggleOpen}>
        <h3 className="dropdown-title">
          <FontAwesomeIcon icon={faCircle} className="bullet-icon" />
          {title}
          {rating && reviewCount && (
            <span className="rating-info">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              {rating} ({reviewCount})
            </span>
          )}
        </h3>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`dropdown-icon ${isOpen ? 'open' : ''}`} 
        />
      </div>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

const ProductDropdownInfo = ({ description, ingredients, faqs, additionalDetails, reviewCount }) => {
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <div className="product-dropdown-info">
      <DropdownSection
        title="DESCRIPTION"
        content={<p>{description}</p>}
        isOpen={openSection === 'description'}
        toggleOpen={() => toggleSection('description')}
      />
      <DropdownSection
        title="INGREDIENTS"
        content={<p>{ingredients}</p>}
        isOpen={openSection === 'ingredients'}
        toggleOpen={() => toggleSection('ingredients')}
      />
      <DropdownSection
        title="FREQUENTLY ASKED QUESTIONS"
        content={
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                <strong>Q: {faq.question}</strong>
                <p>A: {faq.answer}</p>
              </li>
            ))}
          </ul>
        }
        isOpen={openSection === 'faqs'}
        toggleOpen={() => toggleSection('faqs')}
      />
      <DropdownSection
        title="ADDITIONAL DETAILS"
        content={<p>{additionalDetails}</p>}
        isOpen={openSection === 'additionalDetails'}
        toggleOpen={() => toggleSection('additionalDetails')}
      />
      <DropdownSection
        title="REVIEWS"
        content={<p>Review content goes here</p>}
        isOpen={openSection === 'reviews'}
        toggleOpen={() => toggleSection('reviews')}
        rating={4.7}
        reviewCount={reviewCount}
      />
    </div>
  );
};

export default ProductDropdownInfo;