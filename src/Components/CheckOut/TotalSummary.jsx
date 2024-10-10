import React, { useState } from 'react';
import '../../Assets/Css/CheckOut/TotalSummary.scss';

const TotalSummary = ({ subtotal, shipping, total, vat }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckout = () => {
    if (termsAccepted) {
      // Proceed with checkout
      console.log('Proceeding to checkout');
    } else {
      alert('Please accept the terms and conditions');
    }
  };

  return (
    <div className="total-summary ">
      <div className="summary-item">
        <span>Subtotal</span>
        <span>{subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Shipment</span>
        <span>{shipping.toFixed(2)}</span>
      </div>
      
      <div className="summary-item vat">
        <span>(VAT)</span>
        <span>{vat.toFixed(2)}</span>
      </div>
      <div className="summary-item total">
        <span>Total</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className="summary-item delivery-time">
        <span>Delivery time 2 - 4 working days</span>
      </div>
      <div className="terms-conditions">
        <input 
          type="checkbox" 
          id="terms" 
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <label htmlFor="terms">T&C is simply dummy text of the printing and typesetting industry</label>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default TotalSummary;