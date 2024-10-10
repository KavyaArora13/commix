import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaStar } from 'react-icons/fa'; // Import outlined, filled heart and star icons
import '../../Assets/Css/ProductPage/ProductCard.scss';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status

  // Toggle the heart icon color on click
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevents card selection when heart is clicked
    setIsFavorite((prevIsFavorite) => !prevIsFavorite); // Toggle the state
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100" tabIndex="-1"> {/* Prevent the card from getting focus */}
        {/* Heart icon that toggles between outlined and filled */}
        <div onClick={handleFavoriteClick} style={{ position: 'relative', zIndex: 2 }}>
          {isFavorite ? (
            <FaHeart className="heart-icon position-absolute" style={{ color: 'red' }} />
          ) : (
            <FaRegHeart className="heart-icon position-absolute" style={{ color: '#333' }} />
          )}
        </div>

        <img
          src={product.image} // Product image
          alt={product.name} // Alt text for the image
          className="card-img-top no-outline" // Add class to remove outline on image
          style={{ height: '302px', objectFit: 'cover' }} // Adjust height and image style
        />
        <div className="card-body">
          {/* Category and rating section */}
          <div className="card-category-rating">
            <p>{product.category}</p>
            <div className="rating-section">
              <FaStar className="star-icon" />
              <span className="rating-text">{product.rating}</span>
            </div>
          </div>
          <h5 className="card-title1">{product.name}</h5>
          <p className="card-text1">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

