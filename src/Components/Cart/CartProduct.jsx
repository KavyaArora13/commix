import React from 'react';
import '../../Assets/Css/Cart/CartProduct.scss';

const CartProduct = ({ image, title, price, oldPrice, discount, description }) => {
  return (
    <div className="cart-product border p-3 mb-3">
      <div className="row align-items-start">
        {/* Product Image */}
        <div className="col-2">
          <img src={image} alt={title} className="img-fluid" />
        </div>

        {/* Product Details */}
        <div className="col-8">
          <h5 className="cart-product-title">{title}</h5>
          <p className="cart-product-stock text-success mb-1">In stock</p>
          <div className="cart-product-options mb-1">
            <input type="checkbox" id="gift"/>
            <label htmlFor="gift" className="ms-2">This will be a gift <a href="#" className="learn-more">Learn more</a></label>
          </div>
          <p className="cart-product-size mb-2">Size: 50g (Pack of 1)</p>

          <div className="cart-product-actions mb-2">
            <div className="quantity-selector me-3">
              <label htmlFor="quantity">Qty:</label>
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <a href="#" className="me-2">Delete</a>
            <a href="#" className="me-2">Save for later</a>
            <a href="#" className="me-2">See more like this</a>
            <a href="#">Share</a>
          </div>

          <p className="cart-product-description mb-0">Description: {description}</p>
        </div>

        {/* Price and Discount Section */}
        <div className="col-2 text-end">
          <div className="d-flex justify-content-end align-items-center mb-1">
            <span className="badge bg-danger me-2">{discount}% off</span>
            <span className="ends-in">Ends in 00:00</span>
          </div>
          <p className="cart-product-price mb-0">${price.toFixed(2)}</p>
          <p className="text-muted mb-2">
            <small>M.R.P.: <del>${oldPrice.toFixed(2)}</del></small>
          </p>
          <button className="btn btn-outline-secondary btn-sm mb-1">
            Save 5% <span className="caret"></span>
          </button>
          <p className="mb-0"><a href="#" className="collect-coupon">Collect Coupon</a></p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;